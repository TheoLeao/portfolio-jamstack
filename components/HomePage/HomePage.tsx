import styles from './HomePage.module.scss'
import NavigationMenu from './../NavigationMenu/NavigationMenu'

const HomePage = ({allCategories}) => {
    console.log(allCategories)
    return (
        <>
            <NavigationMenu></NavigationMenu>
        </>
    )
}

export default HomePage