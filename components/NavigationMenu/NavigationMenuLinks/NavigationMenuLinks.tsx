import styles from './NavigationMenuLinks.module.scss'

const NavigationMenuLinks = (allProjectsCategories) => {


    return (

        <nav className={styles.nav}>
            <ul className={styles.menu_navigation}>
                <li>
                    <a href="#0">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16.906" height="16.755"
                                viewBox="0 0 16.906 16.755">
                                <path id="_002-home" data-name="002-home"
                                    d="M16.638,7.574,8.819.146a.532.532,0,0,0-.731,0L.261,7.582a.872.872,0,0,0,.62,1.494H2.113v6.632A1.052,1.052,0,0,0,3.17,16.755H6.164a.526.526,0,0,0,.528-.524V11.694a.176.176,0,0,1,.176-.175h3.17a.176.176,0,0,1,.176.175v4.538a.526.526,0,0,0,.528.524h2.994a1.052,1.052,0,0,0,1.057-1.047V9.076h1.233a.878.878,0,0,0,.881-.873A.888.888,0,0,0,16.638,7.574Z"
                                    transform="translate(0 0)" fill="#fbfbfd" />
                            </svg>
                        </span>
                        Accueil</a>
                </li>
                <li className={styles.li_dropdown}><span><svg xmlns="http://www.w3.org/2000/svg" width="17.593" height="19.193"
                    viewBox="0 0 17.593 19.193">
                    <g id="Groupe_107" data-name="Groupe 107" transform="translate(0)">
                        <g id="_001-copy" data-name="001-copy">
                            <path id="Tracé_289" data-name="Tracé 289"
                                d="M19.595,2.2A2.2,2.2,0,0,0,17.4,0H8.2A2.2,2.2,0,0,0,6,2.2V13a2.2,2.2,0,0,0,2.2,2.2h9.2a2.2,2.2,0,0,0,2.2-2.2Zm-3.8,9.4h-6a.6.6,0,0,1,0-1.2h6a.6.6,0,0,1,0,1.2Zm0-2.4h-6A.6.6,0,1,1,9.8,8h6a.6.6,0,1,1,0,1.2Zm0-2.4h-6a.6.6,0,1,1,0-1.2h6a.6.6,0,0,1,0,1.2Z"
                                transform="translate(-2.002)" fill="#fbfbfd" />
                            <path id="Tracé_290" data-name="Tracé 290"
                                d="M7.2,16.894a3.4,3.4,0,0,1-3.4-3.4V2.7c0-.069.016-.133.02-.2H3.2A2.2,2.2,0,0,0,1,4.7v12.8a2.2,2.2,0,0,0,2.2,2.2h9.6a2.2,2.2,0,0,0,2.2-2.2v-.6Z"
                                transform="translate(-1 -0.501)" fill="#fbfbfd" />
                        </g>
                    </g>
                </svg>
                    Mes projets
                </span>

                    <ul className={styles.dropdown}>
                        {

                            allProjectsCategories.allProjectsCategories.categories.nodes.map(
                                category => {
                                    return <li><a href={`projets/${category.slug}`}>{category.name}</a></li>;
                                }
                            )

                        }
                    </ul>
                </li>
                <li>
                    <a href="blog.html"><span><svg xmlns="http://www.w3.org/2000/svg" width="19.274" height="19.273"
                        viewBox="0 0 19.274 19.273">
                        <path id="_004-feather" data-name="004-feather"
                            d="M19.1.177A.61.61,0,0,0,18.622,0,20.094,20.094,0,0,0,8.362,3.551a.6.6,0,0,0-.245.577,6.805,6.805,0,0,1-.857,3.664A7.271,7.271,0,0,0,6.443,6.2a.6.6,0,0,0-.461-.267.611.611,0,0,0-.492.2,9.9,9.9,0,0,0-2.534,9.043L.235,17.9a.8.8,0,1,0,1.136,1.136l6.9-6.9A.8.8,0,0,1,9.4,13.279L6.126,16.555c.062,0,.126.012.187.012a10.493,10.493,0,0,0,7.608-3.529c3.357-3.357,4.907-6.946,5.35-12.387A.6.6,0,0,0,19.1.177Z"
                            transform="translate(0 -0.001)" fill="#fbfbfd" />
                    </svg>
                    </span>Mon blog</a></li>
                <li>
                    <a href="contact.html">
                        <span><svg id="_005-telephone" data-name="005-telephone"
                            xmlns="http://www.w3.org/2000/svg" width="19.274" height="19.274"
                            viewBox="0 0 19.274 19.274">
                            <g id="Groupe_109" data-name="Groupe 109" transform="translate(13.586 11.346)">
                                <g id="Groupe_108" data-name="Groupe 108">
                                    <path id="Tracé_293" data-name="Tracé 293"
                                        d="M366.108,304.268l-2.4-2.4a1.736,1.736,0,0,0-2.4,0l-.4.4,4.791,4.791.4-.4A1.693,1.693,0,0,0,366.108,304.268Z"
                                        transform="translate(-360.917 -301.393)" fill="#fbfbfd" />
                                </g>
                            </g>
                            <g id="Groupe_111" data-name="Groupe 111" transform="translate(0 1.711)">
                                <g id="Groupe_110" data-name="Groupe 110">
                                    <path id="Tracé_294" data-name="Tracé 294"
                                        d="M12.766,56.733a1.27,1.27,0,0,1-1.684-.087l-4.736-4.74a1.271,1.271,0,0,1-.087-1.684l-4.78-4.78a6.1,6.1,0,0,0,.294,8.279l7.5,7.5a6.062,6.062,0,0,0,8.279.294Z"
                                        transform="translate(0 -45.443)" fill="#fbfbfd" />
                                </g>
                            </g>
                            <g id="Groupe_113" data-name="Groupe 113" transform="translate(2.244)">
                                <g id="Groupe_112" data-name="Groupe 112">
                                    <path id="Tracé_295" data-name="Tracé 295"
                                        d="M64.8,2.875l-2.4-2.4a1.736,1.736,0,0,0-2.4,0l-.4.4L64.4,5.67l.4-.4A1.693,1.693,0,0,0,64.8,2.875Z"
                                        transform="translate(-59.612 0)" fill="#fbfbfd" />
                                </g>
                            </g>
                        </svg>
                        </span>Contact</a></li>
            </ul>
        </nav>
    )
}

export default NavigationMenuLinks

