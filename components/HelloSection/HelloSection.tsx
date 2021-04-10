import styles from './HelloSection.module.scss'
import parse from 'html-react-parser';

//Components
import ButtonReverse from './../Buttons/ButtonReverse/ButtonReverse';

const HelloSection = ({ homePageData }) => {
    return (

        <section className={styles.sectionHello}>
            <div className={styles.avatar}>
                <img src={homePageData.headerBitmoji.mediaItemUrl} alt={homePageData.headerBitmoji.altText} />
            </div>
            <h2>{homePageData.headerHelloTitle}</h2>
            <h1>{homePageData.headerJobTitle}
                <img
                    src={homePageData.headerJobTitleEmoji.mediaItemUrl}
                    alt={homePageData.headerJobTitleEmoji.altText} />
            </h1>
            <div className={styles.description}>
                {parse(homePageData.headerDescription)}
            </div>
            <ButtonReverse children={homePageData.headerButtonActionText} href={homePageData.headerButtonActionUrl} target="_blank"></ButtonReverse>
            <span></span>

        </section>
    )
}
export default HelloSection;