import styles from "../styles/FooterMobile.module.scss";
import {FaFacebookF, FaInstagram, FaPinterest, FaYoutube} from "react-icons/fa";


export  default  function FooterMobile(){
    return(
        <footer className={styles.footer}>
            <div className={styles.context} >
                <div className={styles.newsletter}>
                    <p>تماس با پشتیبانی : 3456000-021</p>
                    <p>پاسخگویی ۲۴ ساعته ، ۷ روز هفته</p>
                </div>

                    <div className={styles.socialIcons}>
                        <FaYoutube />
                        <FaPinterest />
                        <FaFacebookF />
                        <FaInstagram />
                    </div>
                    <p className={styles.copyright}>تمام حقوق این وبسایت متعلق به فروشگاه آنلاین کاستومی می باشد</p>
            </div>

        </footer>
    );
}