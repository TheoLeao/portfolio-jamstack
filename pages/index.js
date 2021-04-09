//Styles
import styles from '../styles/Home.module.css'

//Components
import GlobalHead from '../components/GlobalHead/GlobalHead'
import HomePage from '../components/HomePage/HomePage'

//Data Fetching
import { GetHomepageData } from '../lib/api'

export default function Home({ homePageData }) {
  console.log(homePageData)
  return (
    <>
      <GlobalHead></GlobalHead>
      <HomePage homePageData={homePageData}></HomePage>
    </>

  )
}

export async function getStaticProps() {
  const homePageData = await GetHomepageData()
  return {
    props: { 
      homePageData: homePageData.data },
  }
}