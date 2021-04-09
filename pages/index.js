import Head from 'next/head'
import styles from '../styles/Home.module.css'

import GlobalHead from '../components/GlobalHead/GlobalHead'
import HomePage from '../components/HomePage/HomePage'

export default function Home() {
  return (
    <>
      <GlobalHead></GlobalHead>
      <HomePage></HomePage>
    </>

  )
}
