import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://admin-portfolio.theoboudier.fr/graphql',
    cache: new InMemoryCache()
});
const getAllCategories = async () => {
    const res = await client.query({
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
    return res.json()
}
export default getAllCategories;

