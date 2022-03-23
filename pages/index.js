
//Styles
import styles from '../styles/Home.module.css'

//Components
import GlobalHead from '../components/GlobalHead/GlobalHead'
import HomePage from '../components/HomePage/HomePage'
//Data Fetching
import { getAllCategories, getAllProjectsCategories, getAllBlogsCategories, getAllAudiovisuelsProjects, getAllWebProjects, getAllGraphicsProjects, getAllMarketingProjects, getHomepageData } from '../lib/api'

export default function Home({data}) {
  console.log(data)
  return (
    <>
      <GlobalHead></GlobalHead>
        <HomePage data={data}></HomePage>
    </>

  )
}

export async function getStaticProps() {
  const allCategories = await getAllCategories();
  const allProjectsCategories = await getAllProjectsCategories();
  const allBlogsCategories = await getAllBlogsCategories();
  const allWebProjects = await getAllWebProjects();
  const allAudiovisuelsProjects = await getAllAudiovisuelsProjects();
  const allGraphicsProjects = await getAllGraphicsProjects();
  const allMarketingProjects = await getAllMarketingProjects();
  const homePageData = await getHomepageData();
  
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


