import styles from './NavigationMenu.module.scss'
import NavigationMenuLinks from './NavigationMenuLinks/NavigationMenuLinks';

import Logo from '../Logo/Logo';
const NavigationMenu = () => {
    return (<>
        <header className={styles.header}>
            <Logo></Logo>
            <input type="checkbox" id="dropdown" className={styles.dropdown} />
            <label htmlFor="dropdown">
                <span className={styles.sronly}>Menu</span>
                <span>&#9776;</span>
            </label>
            <NavigationMenuLinks></NavigationMenuLinks>
        </header>
    </>)
}
export default NavigationMenu