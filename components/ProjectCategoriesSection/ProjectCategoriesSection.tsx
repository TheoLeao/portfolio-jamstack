import styles from './ProjectCategoriesSection.module.scss';
import SectionTitle from './../SectionTitle/SectionTitle';
import ProjectCategoriesElement from '../ProjectCategoriesElement/ProjectCategoriesElement';

const ProjectCategoriesSection = ({allProjectsCategories}) => {
    console.log(allProjectsCategories.display)
    return (

        <section className={styles.sectionCategorieProjets}>
            <SectionTitle title="Mes différents projets" />
            <div className={styles.categoriesProjets}>
                {
                    allProjectsCategories.slice().sort((a,b) => parseFloat(a.displayOrder.displayOrder) - parseFloat(b.displayOrder.displayOrder) ).map((category, i) => { return <ProjectCategoriesElement category={category}></ProjectCategoriesElement>})
                }
            </div>
        </section>
    )
}
export default ProjectCategoriesSection;