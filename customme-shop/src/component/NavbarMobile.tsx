import styles from "../styles/navbarMobile.module.scss";
import {Link} from "react-router-dom";


export default function  NavbarMobile(){

return(
<div  className={styles.navbar}>
    <div className={styles.navbarLogo}>
        <Link to="/" >
            <img src="/menu.svg" alt="Logo 1"  />
        </Link>

    </div>

    <div className={styles.searchBox}>
        <input type="text" className={styles.searchInput} placeholder="جستجو در"/>
        <img src='/lo.svg' alt="Logo 2"  className={styles.logoTwo} />
        <img src='/search.svg' alt='search icon' className={styles.icon}/>

    </div>
    <div className={styles.Logo}>
        <Link to="/" >
            <img src="/LOGO.svg" alt="Logo 1"  />
        </Link>

    </div>



</div>
)}