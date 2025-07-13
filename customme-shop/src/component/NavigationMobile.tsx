import styles from "../styles/UserProfile.module.scss";



export default function NavigationMobile(){
    return(
        <div>
            <nav className={styles.navbar}>
                <div className={styles.navitem}>
                    <img src="/nav1.svg" alt="home icon"/>
                </div>
                <div className={styles.navitem}>
                    <img src="/nav2.svg" alt="order icon"/>
                </div>
                <div className={styles.navitem}>
                    <img src="/nav3.svg" alt="buy icon"/>
                </div>
                <div className={styles.navitem}>
                    <img src="/nav4.svg" alt="profile icon"/>
                </div>
            </nav>
        </div>

    )


}