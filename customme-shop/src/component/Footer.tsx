import styles from "../styles/footer.module.scss"
import { FaInstagram, FaFacebookF, FaPinterest, FaYoutube } from "react-icons/fa";

export default function  Footer () {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
    
        <div className={styles.newsletter}>
          <p>برای دریافت آخرین اخبار و تخفیف های جدید،ایمیل خود را وارد نمایید</p>
          <input type="email" placeholder="ایمیل شما" />
          <button>ثبت</button>
        </div>
        <div className={styles.leftsection}>
        <p>ما را در شبکه های اجتماعی دنبال کنید</p>
        <div className={styles.socialIcons}>
          <FaYoutube />
          <FaPinterest />
          <FaFacebookF />
          <FaInstagram />

        </div>
        </div>
      </div>

      <div className={styles.bottomSection}>

        <div className={styles.links}>
          <div>
            <h4>راهنمای خرید</h4>
            <ul>
              <li>راهنمای ثبت سفارش</li>
              <li>شیوه های پرداخت</li>
              <li>نحوه ارسال سفارش ها</li>
              <li>شرایط بازگشت دادن محصول</li>
            </ul>
          </div>

          <div>
            <h4>خدمات مشتریان</h4>
            <ul>
              <li>سوالات متداول</li>
              <li>حریم خصوصی</li>
              <li>ثبت شکایت</li>
              <li>ضمانت نامه محصولات</li>
            </ul>
          </div>

          <div>
            <h4>همراه با کاستومی</h4>
            <ul>
              <li>فروش محصولات</li>
              <li>فرصت همکاری</li>
              <li>تماس با ما</li>
              <li>نقشه سایت</li>
            </ul>
          </div>
        </div>
        <div className={styles.storeInfo}>
          <h3>فروشگاه اینترنتی کاستومی</h3>
          <p>تماس با پشتیبانی: 021-XXXXXXX</p>
          <p>پاسخگویی 24 ساعته، 7 روز هفته</p>
          <div className={styles.certifications}>
            <img src="/cart1.svg" alt="Certification 1" />
            <img src="/cart2.svg" alt="Certification 2" />
            <img src="/cart3.svg" alt="Certification 3" />
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        <p>تمام حقوق این وبسایت متعلق به فروشگاه آنلاین کاستومی می باشد</p>
      </div>
    </footer>
  );
};

