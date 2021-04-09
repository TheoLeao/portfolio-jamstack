//Styles
import styles from '../styles/Home.module.css'

//Components
import GlobalHead from '../components/GlobalHead/GlobalHead'
import HomePage from '../components/HomePage/HomePage'

//Data Fetching
import getAllCategories from '../lib/api'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export default function Home({ allCategories }) {
  return (
    <>
      <GlobalHead></GlobalHead>
      <HomePage allCategories={allCategories}></HomePage>
    </>

  )
}


export async function getStaticProps() {
  //Client Apollo
  const client = new ApolloClient({
    uri: 'https://admin-portfolio.theoboudier.fr/graphql',
    cache: new InMemoryCache()
  });

  //Queries
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

  



  return {
    props: {
      allCategories: allCategories.data,

    }
  }
}
