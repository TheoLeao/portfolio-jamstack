//Styles
import styles from '../styles/Home.module.css'

//Components
import GlobalHead from '../components/GlobalHead/GlobalHead'
import HomePage from '../components/HomePage/HomePage'

//Data Fetching
import getAllCategories from '../lib/api'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export default function Home({ data }) {
  console.log(data)
  return (
    <>
      <GlobalHead></GlobalHead>
      <HomePage allCategories={data.categories.allCategories}></HomePage>
    </>

  )
}


export async function getStaticProps() {
  //Client Apollo
  const client = new ApolloClient({
    uri: 'https://admin-portfolio.theoboudier.fr/graphql',
    cache: new InMemoryCache()
  });

  //Categories Queries
  const allCategories = await client.query({
    query: gql`
  query GetAllCategories {
    categories {
      nodes {
        name
        categoryId
        parent {
          node {
            categoryId
            name
          }
        }
      }
    }
  }
  `
  });
  const allProjectsCategories = await client.query({
    query: gql`
    query GetProjectsCategories {
      categories(where: {childOf: 10}) {
        nodes {
          name
          categoryId
          parent {
            node {
              categoryId
              name
            }
          }
        }
      }
    }
    
  `
  });
  const allBlogsCategories = await client.query({
    query: gql`
    query GetBlogsCategories {
      categories(where: {childOf: 10}) {
        nodes {
          name
          categoryId
          parent {
            node {
              categoryId
              name
            }
          }
        }
      }
    } 
  `
  });

  //Projects Queries
  const allAudiovisuelsProjects = await client.query({
    query: gql`
    query GetAudiovisuelsProjects {
      projects(where: {categoryId: 13}) {
        edges {
          node {
            title
            projectInfos {
              projectLink
              projectShortDescription
              projectLongDescription
              projectToolsused
              projectMainImage {
                altText
                mediaItemUrl
                title
              }
              projectTotalPreviewImages
              projectPreviewImage1 {
                altText
                mediaItemUrl
                title
              }
              projectPreviewImage2 {
                altText
                mediaItemUrl
                title
              }
              projectPreviewImage3 {
                altText
                mediaItemUrl
                title
              }
              projectPreviewImage4 {
                altText
                mediaItemUrl
                title
              }
              projectPreviewImage5 {
                altText
                mediaItemUrl
                title
              }
              projectThumbail {
                altText
                mediaItemUrl
                title
              }
            }
          }
        }
      }
    }
    
  `
  });
  const allWebProjects = await client.query({
    query: gql`
    query GetWebProjects {
      projects(where: {categoryId: 13}) {
        edges {
          node {
            title
            projectInfos {
              projectLink
              projectShortDescription
              projectLongDescription
              projectToolsused
              projectMainImage {
                altText
                mediaItemUrl
                title
              }
              projectTotalPreviewImages
              projectPreviewImage1 {
                altText
                mediaItemUrl
                title
              }
              projectPreviewImage2 {
                altText
                mediaItemUrl
                title
              }
              projectPreviewImage3 {
                altText
                mediaItemUrl
                title
              }
              projectPreviewImage4 {
                altText
                mediaItemUrl
                title
              }
              projectPreviewImage5 {
                altText
                mediaItemUrl
                title
              }
              projectThumbail {
                altText
                mediaItemUrl
                title
              }
            }
          }
        }
      }
    }
    
  `
  });
  const allGraphicsProjects = await client.query({
    query: gql`
    query GetGraphicsProjects {
      projects(where: {categoryId: 13}) {
        edges {
          node {
            title
            projectInfos {
              projectLink
              projectShortDescription
              projectLongDescription
              projectToolsused
              projectMainImage {
                altText
                mediaItemUrl
                title
              }
              projectTotalPreviewImages
              projectPreviewImage1 {
                altText
                mediaItemUrl
                title
              }
              projectPreviewImage2 {
                altText
                mediaItemUrl
                title
              }
              projectPreviewImage3 {
                altText
                mediaItemUrl
                title
              }
              projectPreviewImage4 {
                altText
                mediaItemUrl
                title
              }
              projectPreviewImage5 {
                altText
                mediaItemUrl
                title
              }
              projectThumbail {
                altText
                mediaItemUrl
                title
              }
            }
          }
        }
      }
    }
    
    
  `
  });
  const allMarketingProjects = await client.query({
    query: gql`
    query GetMarketingProjects {
      projects(where: {categoryId: 13}) {
        edges {
          node {
            title
            projectInfos {
              projectLink
              projectShortDescription
              projectLongDescription
              projectToolsused
              projectMainImage {
                altText
                mediaItemUrl
                title
              }
              projectTotalPreviewImages
              projectPreviewImage1 {
                altText
                mediaItemUrl
                title
              }
              projectPreviewImage2 {
                altText
                mediaItemUrl
                title
              }
              projectPreviewImage3 {
                altText
                mediaItemUrl
                title
              }
              projectPreviewImage4 {
                altText
                mediaItemUrl
                title
              }
              projectPreviewImage5 {
                altText
                mediaItemUrl
                title
              }
              projectThumbail {
                altText
                mediaItemUrl
                title
              }
            }
          }
        }
      }
    }
    
  `
  });

  //Pages Queries
  const allHomePageData = await client.query({
    query: gql`
    query GetHomepageData {
      homepageInfos {
        edges {
          node {
            homepageInfos {
              headerBitmoji {
                altText
                mediaItemUrl
                title
              }
              headerHelloTitle
              headerJobTitle
              headerJobTitleEmoji {
                altText
                mediaItemUrl
                title
              }
              headerDescription
              headerButtonActionUrl
              headerButtonActionText
              careerSectionTitle
              careerTotalItems
              careerItem1Date
              careerItem1Description
              careerItem2Date
              careerItem2Description
              careerItem3Date
              careerItem3Description
              careerItem4Date
              careerItem4Description
              careerItem5Date
              careerItem5Description
              careerItem6Date
              careerItem6Description
              categoriesSectionTitle
              categoriesItemButtonText
              featuredProjectSectionTitle
              featuredProjectTitle
              featuredProjectShortDescription
              featuredProjectPostUrl
              featuredProjectPostDate
              featuredProjectPostAuthor
              featuredProjectButtonText
              trustedSectionTitle
              trustedCompanyItem1Title
              trustedCompanyItem1Logo {
                altText
                mediaItemUrl
                title
              }
              trustedCompanyItem1Shortdescription
              trustedCompanyItem1Url
              trustedCompanyItem2Title
              trustedCompanyItem2Logo {
                altText
                mediaItemUrl
                title
              }
              trustedCompanyItem2Shortdescription
              trustedCompanyItem2Url
              trustedCompanyItem3Title
              trustedCompanyItem3Logo {
                altText
                mediaItemUrl
                title
              }
              trustedCompanyItem3Shortdescription
              trustedCompanyItem3Url
              trustedCompanyItem4Title
              trustedCompanyItem4Logo {
                altText
                mediaItemUrl
                title
              }
              trustedCompanyItem4Shortdescription
              trustedCompanyItem4Url
              trustedCompanyItem5Title
              trustedCompanyItem5Logo {
                altText
                mediaItemUrl
                title
              }
              trustedCompanyItem5Shortdescription
              trustedCompanyItem5Url
              trustedSectionTitleEmoji {
                altText
                mediaItemUrl
                title
              }
            }
          }
        }
      }
    }    
  `
  });


  return {
    props: {
      data: {
        categories: {
          allCategories: allCategories.data,
          allProjectsCategories: allProjectsCategories.data,
          allBlogsCategories: allBlogsCategories.data,
        },
        projects: {
          web: allWebProjects,
          audiovisuel: allAudiovisuelsProjects.data,
          graphics: allGraphicsProjects.data,
          marketing: allMarketingProjects.data
        },
        pages: {
          homepage: allHomePageData.data
        }
      },

    }
  }
}
