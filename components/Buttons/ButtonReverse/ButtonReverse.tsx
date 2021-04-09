import styles from './ButtonReverse.module.scss'

const ButtonReverse = ({children, href, target}) => {
    return (
        <a href={href} target={target} className={styles.btnInverse}>{children}</a>
    )
}

export default ButtonReverse;
