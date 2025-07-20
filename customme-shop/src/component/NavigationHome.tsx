import styles from "../styles/UserProfile.module.scss";



export default function NavigationHome(){
    return(
        <div>
            <nav className={styles.navbar}>
                <div className={styles.navitem}>
                    <img src="/h1.svg" alt="home icon"/>
                </div>
                <div className={styles.navitem}>
                    <img src="/nav2.svg" alt="order icon"/>
                </div>
                <div className={styles.navitem}>
                    <img src="/nav3.svg" alt="buy icon"/>
                </div>
                <div className={styles.navitem}>
                    <img src="/p1.svg" alt="profile icon"/>
                </div>
            </nav>
        </div>

    )


}