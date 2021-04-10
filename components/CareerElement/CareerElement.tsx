import VerticalBar from '../VerticalBar/VerticalBar'
import styles from './CareerElement.module.scss'

const CareerElement = ({date, text}) => {
    return (
        <div className={styles.elementParcours}>
            <VerticalBar></VerticalBar>
            <div>
                <span className={styles.dateParcours}>{date}</span>
                <span className={styles.titreParcours}>{text}</span>
            </div>

        </div>
    )
}

export default CareerElement;