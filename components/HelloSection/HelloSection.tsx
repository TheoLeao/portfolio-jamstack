import styles from './HelloSection.module.scss'

//Components
import ButtonReverse from './../Buttons/ButtonReverse/ButtonReverse';

const HelloSection = () => {
    return (

        <section className={styles.sectionHello}>
            <div className={styles.avatar}>
                <img src="ressources/img/avatars/avatar.png" alt="Avatar bitmoji illustrant Théo Boudier, développeur web"/>
        </div>
                <h2>Salut, je suis Théo Boudier</h2>
                <h1>Développeur web ainsi que créateur de contenu digital 
                    <img
                    src="ressources/img/icons/iconsIOS/iconIOS_Signe2Doigts.png"
                    alt="emoticone apple qui fait un signe avec ses doigts"/>
        </h1>
                    <div className={styles.description}>
                        <p>Passionné par le monde du web, mes formations pluridisciplinaires m’ont permis de développer un
                            ensemble de compétences, principalement dans <b>le développement web</b> mais également dans le
                            graphisme, l’audiovisuel, la communication ainsi que la gestion de projets. Ces différentes
                            compétences me permettront d'<b>organiser et de conduire votre projet web</b> de bout en bout ou
                            bien d'<b>intégrer votre équipe de développement</b>.</p>
                    </div>
                   <ButtonReverse children="Télécharger mon CV"></ButtonReverse>
                    <span></span>

    </section>
                )
}
                export default HelloSection;