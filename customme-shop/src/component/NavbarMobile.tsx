import styles from "../styles/navbarMobile.module.scss";
import {Link} from "react-router-dom";
import Sidebar from "./Sidebar.tsx";
import {useState} from "react";

export default function  NavbarMobile(){
  const [open, setOpen] = useState(false);

return(
<div  className={styles.navbar}>
    <div className={styles.navbarLogo} onClick={() => setOpen(true)}>
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
    <Sidebar isOpen={open} onClose={() => setOpen(false)} />



</div>
)}