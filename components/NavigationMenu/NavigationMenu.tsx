//Style
import styles from './NavigationMenu.module.scss'
//Components
import NavigationMenuLinks from './NavigationMenuLinks/NavigationMenuLinks';
import Logo from '../Logo/Logo';
//Data
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export default function NavigationMenu({allProjectsCategories}) {
    return (<>
        <header className={styles.header}>
            <Logo></Logo>
            <input type="checkbox" id="dropdown" className={styles.dropdown} />
            <label htmlFor="dropdown">
                <span className={styles.sronly}>Menu</span>
                <span>&#9776;</span>
            </label>
            <NavigationMenuLinks></NavigationMenuLinks>
        </header>
    </>)
}

export async function getStaticProps() {
    //Client Apollo
    const client = new ApolloClient({
      uri: 'https://admin-portfolio.theoboudier.fr/graphql',
      cache: new InMemoryCache()
    });
  
    //Pages Queries
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
    return {
      props: {
        allProjectsCategories:  allProjectsCategories.data
      }
    }
  }
