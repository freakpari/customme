import styles from '../styles/navbar.module.scss';
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
    <div  className={styles.navbar}>
        <div className={styles.navbarLogo}>
            <img src="/public/LOGO.svg" alt="Logo 1" className={styles.logoImage} />
            <img src="/public/castomme.svg" alt="Logo 2" className={styles.logoImage} />
        </div>


    <div className={styles.searchBox}>
        <div className={styles.icon}>
        <svg
            xmlns="/public/search.svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        </div>
        <input type="text" className={styles.searchInput} placeholder="جستجو" />
        </div>


        <ul className={styles.navList}>
        <li>
        <Link to="/cart" className={styles.listItem}>
            <svg
            xmlns="/public/Login.svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            >
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            سبد خرید
        </Link>
        </li>
        <li>
        <Link to="/login" className={styles.listItem}>
            <svg
            xmlns="/public/shopping-cart.svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            >
            <circle cx="12" cy="8" r="4"></circle>
            <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"></path>
            </svg>
            ورود | ثبت‌ نام
        </Link>
        </li>
    </ul>
        
    </div>
    );
}
