import styles from './ProjectCategoriesElement.module.scss'

const ProjectCategoriesElement = ({category}) => {
    console.log(category)
    return (
        <div className={styles.categorie}>
            <div className={styles.imgCategorie}>
                <img src={category.featuredImage.featuredImage.mediaItemUrl} alt={category.featuredImage.featuredImage.altText} />
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="3" viewBox="0 0 23 3">
                <rect id="Rectangle_14" data-name="Rectangle 14" width="23" height="3" fill="#c12c3e" />
            </svg>
            <div className={styles.infoCategorie}>
                <a href={`projets/`}>
                    <h4>{category.name}</h4>
                </a>
                <span>{category.description}</span>
                <a href={`projets/${category.slug}`}>Découvrir</a>
            </div>
        </div>
    )
}

export default ProjectCategoriesElement;