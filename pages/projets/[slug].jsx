import Link from "next/link";
import { getAllSlug, getProjectBySlug } from "../../lib/api";

export default function ProjectPage(props) {

  console.log(props.projectData);
  return (
    <div>
      <h1>{props.title}</h1>
      
    </div>
  );
}

const PATHS_QUERY = `
query MyQuery {
    posts {
      nodes {
        slug
      }
    }
  }  
`;
export const getStaticPaths = async (context) => {

  const allSlugResult = await getAllSlug();
  const paths = allSlugResult.data.projects.edges.map((edge) => {
    return { params: { slug: edge.node.slug } }
  })
  return {
    paths: paths,
    fallback: false
  };
};

const ARTICLE_QUERY = `
query MyQuery($slug: String) {
  article(filter: {slug: {eq: $slug}}) {
    author {
      name
    }
    content {
      value
      blocks {
        __typename
        ... on ImageRecord {
          id
          image { 
          	responsiveImage {
              width
              webpSrcSet
              title
              srcSet
              src
              sizes
              height
              bgColor
              base64
              aspectRatio
              alt
          	}
          }
        }
      }
    }
    coverImage {
      responsiveImage {
        width
        webpSrcSet
        title
        srcSet
        src
        sizes
        height
        bgColor
        base64
        aspectRatio
        alt
      }
    }
    id
    publishDate
    slug
    title
  }
}
`;
export const getStaticProps = async ({ params, preview }) => {
  const projectData = await getProjectBySlug(params.slug);
  return {
    props: {
      projectData: projectData
    }
  }
}