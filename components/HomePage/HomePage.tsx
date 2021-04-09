//Styles
import styles from './HomePage.module.scss'
//Components
import NavigationMenu from './../NavigationMenu/NavigationMenu'
import HelloSection from './../HelloSection/HelloSection'

const HomePage = () => {
    return (
        <>
            <NavigationMenu></NavigationMenu>
            <div className={styles.margin_constraint}>
                <div className={styles.useful_width}>
                    <HelloSection></HelloSection>
                </div>
            </div>
        </>
    )
}

export default HomePage