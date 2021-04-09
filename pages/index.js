import { useContext } from 'react';
import { AppContext } from "../providers/AppProvider";


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