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
        <div className={styles.icon}>
            <img src='/search.svg' alt='search icon' />
        </div>
        <input type="text" className={styles.searchInput} placeholder="جستجو" />
    </div>
    <div className={styles.navbarLogo}>
        <Link to="/" >
            <img src="/LOGO.svg" alt="Logo 1"  />
        </Link>

    </div>



</div>
)}