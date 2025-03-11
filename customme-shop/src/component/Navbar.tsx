import styles from '../styles/navbar.module.scss';
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
    <div  className={styles.navbar}>
        <div className={styles.navbarLogo}>
            <img src="/LOGO.svg" alt="Logo 1" className={styles.logoImage} />
            <img src="/castomme.svg" alt="Logo 2" className={styles.logoImage} />
        </div>


    <div className={styles.searchBox}>
        <div className={styles.icon}>
        <img src='/search.svg' alt='search icon' />
        </div>
        <input type="text" className={styles.searchInput} placeholder="جستجو" />
        </div>


        <ul className={styles.navList}>
        <li>
        <Link to="/signup" className={styles.listItem}>
        <img src='/Login.svg' alt='login icon' />
            
        <p style={{ marginLeft: '16px'}}>   ورود | ثبت‌ نام </p>
        </Link>
        </li>
        <li>
        <Link to="/cart" className={styles.listItem}>
        <img src='/shopping-cart.svg' alt='cart icon' />
        <p> سبد خرید </p>       
        </Link>
        </li>
    </ul>
        
    </div>
    );
}
