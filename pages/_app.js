import '../styles/globals.css';
function MyApp({ Component, pageProps }) {
  

  return (
      <Component {...pageProps} />
  )

}
export async function getStaticProps() {
  const allCategories = await GetAllCategories();
  const allProjectsCategories = await GetAllProjectsCategories();
  const allBlogsCategories = await GetAllBlogsCategories();

  const allWebProjects = await GetAllWebProjects();
  const allAudiovisuelsProjects = await GetAllAudiovisuelsProjects();
  const allGraphicsProjects = await GetAllGraphicsProjects();
  const allMarketingProjects = await GetAllMarketingProjects();

  const homePageData = await GetHomepageData();


  return {
    props: {
      data: {
        categories: {
          allCategories: allCategories.data,
          allProjectsCategories: allProjectsCategories.data,
          allBlogsCategories: allBlogsCategories.data,
        },
        projects: {
          allWebProjects: allWebProjects.data,
          allAudiovisuelsProjects: allAudiovisuelsProjects.data,
          allGraphicsProjects: allGraphicsProjects.data,
          allMarketingProjects: allMarketingProjects.data


        },
        pages: {
          homepage: homePageData.data,
        }
      }

    }
  }
}

export default MyApp
