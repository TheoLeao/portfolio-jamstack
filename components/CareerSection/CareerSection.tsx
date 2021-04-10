import styles from './CareerSection.module.scss';
import parse from 'html-react-parser';
//Components
import SectionTitle from './../SectionTitle/SectionTitle';
import CareerElement from './../CareerElement/CareerElement'


const CareerSection = ({ homePageData }) => {
    let AllElementsArray = [];

    for (let i = 1; i <= parseInt(homePageData.careerTotalItems); i++) {
        AllElementsArray.push(
            <CareerElement key={i} date={`${eval("homePageData.careerItem" + i + "Date")}`} text={parse(`${eval("homePageData.careerItem" + i + "Description")}`)} />
        )
    }

    return (
        <section className={styles.sectionParcours}>

            <SectionTitle title="Mon parcours"></SectionTitle>

            <div className={styles.parcours}>
                {AllElementsArray}
            </div>



        </section>
    )
}

export default CareerSection;