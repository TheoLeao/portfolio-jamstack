import styles from './Logo.module.scss'
import Image from 'next/image'

const Logo = () => {
    return (
        <div className={styles.logo}>
            <img src="/ressources/img/logos/logo-2.svg" className={styles.logo} alt="Logo de Théo Boudier"/>
        </div>
    )
}

export default Logo;
