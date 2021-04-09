//Styles
import styles from '../styles/Home.module.css'

//Components
import GlobalHead from '../components/GlobalHead/GlobalHead'
import HomePage from '../components/HomePage/HomePage'

//Data Fetching
import { GetAllCategories, GetAllProjectsCategories, GetAllBlogsCategories, GetAllAudiovisuelsProjects, GetAllWebProjects, GetAllGraphicsProjects, GetAllMarketingProjects, GetHomepageData } from '../lib/api'

export default function Home() {
  return (
    <>
      <GlobalHead></GlobalHead>
        <HomePage homePageData={''}></HomePage>

    </>

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