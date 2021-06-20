import CareerSection from '../CareerSection/CareerSection';
import HelloSection from '../HelloSection/HelloSection';
//Components
import NavigationMenu from '../NavigationMenu/NavigationMenu';
import ProjectCategoriesSection from '../ProjectCategoriesSection/ProjectCategoriesSection';
//Styles
import styles from './HomePage.module.scss';
//Contexts

const HomePage = ({data}) => {
    return (
        <>
            <NavigationMenu allProjectsCategories={data.categories.allProjectsCategories}></NavigationMenu>
            <div className={styles.margin_constraint}>
                <div className={styles.useful_width}>
                    <HelloSection homePageData={data.pages.homepage.homepageInfos.edges[0].node.homepageInfos}></HelloSection>
                    <CareerSection homePageData={data.pages.homepage.homepageInfos.edges[0].node.homepageInfos}></CareerSection>
                    <ProjectCategoriesSection allProjectsCategories={data.categories.allProjectsCategories.categories.nodes}></ProjectCategoriesSection>
                </div>
            </div>
        </>
    )
}

export default HomePage