import {useContext} from 'react';
//Styles
import styles from './HomePage.module.scss';
//Components
import NavigationMenu from '../NavigationMenu/NavigationMenu';
import HelloSection from '../HelloSection/HelloSection';
//Contexts

const HomePage = ({data}) => {
    console.log(data)
    return (
        <>
            <NavigationMenu allProjectsCategories={data.categories.allProjectsCategories}></NavigationMenu>
            <div className={styles.margin_constraint}>
                <div className={styles.useful_width}>
                    <HelloSection homePageData={data.pages.homepage.homepageInfos.edges[0].node.homepageInfos}></HelloSection>
                </div>
            </div>
        </>
    )
}

export default HomePage