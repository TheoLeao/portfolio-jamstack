import styles from './SectionTitle.module.scss'


const SectionTitle = ({ title }) => {
    return (
        <div className={styles.titreSection}>
            <h2>{title}</h2>
            <div className={`${styles.barreHorizontal} ${styles.h2px}`}></div>
        </div>
    )
}

export default SectionTitle