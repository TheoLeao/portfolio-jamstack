import {useContext} from 'react';
//Styles
import styles from './HomePage.module.scss';
//Components
import NavigationMenu from '../NavigationMenu/NavigationMenu';
import HelloSection from '../HelloSection/HelloSection';
import { AppContext } from '../../providers/AppProvider';
//Contexts
//import { AppContext } from '../../providers/AppProvider';

const HomePage = () => {
    const { data } = useContext(AppContext);
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