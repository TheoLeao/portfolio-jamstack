import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://admin-portfolio.theoboudier.fr/graphql',
  cache: new InMemoryCache()
});

//CATEGORIES QUERIES
export async function GetAllCategories() {
  return client.query({
    query: gql`
    query GetAllCategories {
      categories {
        nodes {
          name
          categoryId
          slug
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
}
export async function GetAllProjectsCategories() {
  return client.query({
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
            featuredImage {
            featuredImage {
              mediaItemUrl
              title(format: RAW)
              altText
            }
          }
        }
      }
    }          
      `
  });
}
export async function GetAllBlogsCategories() {
  return client.query({
    query: gql`
    query GetBlogsCategories {
      categories(where: {childOf: 14}) {
        nodes {
          name
          categoryId
          parent {
            node {
              categoryId
              name
            }
          }
           featuredImage {
            featuredImage {
              mediaItemUrl
              title(format: RAW)
              altText
            }
          }
        }
      }
    }
    
    `
  });
}

//PROJECTS QUERIES
export async function GetAllAudiovisuelsProjects() {
  return client.query({
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
}
export async function GetAllWebProjects() {
  return client.query({
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
}
export async function GetAllGraphicsProjects() {
  return client.query({
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
}
export async function GetAllMarketingProjects() {
  return client.query({
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
}

//PAGES QUERIES
export async function GetHomepageData() {
  return client.query({
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
}

