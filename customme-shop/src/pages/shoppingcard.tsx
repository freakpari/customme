import styles from '../styles/shoppingcard.module.scss';
// import { AiOutlineInfoCircle } from 'react-icons/ai';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import MainMenu from '../component/MainMenu';
export default function ShoppingCard ()  {
    return ( 
        <>
    <Navbar />
    <MainMenu />
    <div className={styles.stepper}>
        <img src='/stepercart.svg' alt='steper icon' />
    </div>
    <div className={styles.container}>
        <div className={styles.productList}>
        <h2>سبد خرید</h2>

        {[1, 2].map((item) => (
            <div className={styles.productItem} key={item}>
            <img  className={styles.close} src='/close.svg' alt='close icon' />
            <img src="/tshirt.svg" alt="محصول" />
            <div className={styles.productInfo}>
                <h4>تیشرت سفید طرح دار</h4>
                <p>۲۴۰,۰۰۰ تومان</p>
            </div>
            <div className={styles.deliveryInfo}>
                <img src='/truck.svg' alt='truck' />
                ارسال از ۳ روز آینده
            </div>
            <div className={styles.quantityControls}>
                <button>-</button>
                <span>۱</span>
                <button>+</button>
            </div>
        </div>
        ))}
        </div>
        <div className={styles.cartDetails}>
        <div className={styles.discountSection}>
            <label>کد تخفیف</label>
            <p>کدتخفیف کد معرف کارت هدیه خود را در زیر وارد کرده و دکمه ثبت رو بزنید تا در صورت داشتن اعتبار به سفارش شما اعمال شود</p>
            <div className={styles.discountbox}>
            <input type="text" />
            <div className={styles.submittwo} >
            <button>ثبت</button>
            </div>
            </div>
        </div>
        <div className={styles.summary}>
        <div className={styles.row}>
            <p>قیمت کالا ها</p>
            <span> ۴۸۰,۰۰۰ تومان</span>
        </div>
        <div className={styles.row}>
            <p>مجموع تخفیف</p>
            <span> ۲۰,۰۰۰ تومان</span>
        </div>
        <div className={styles.row}>
            <p>سود شما از خرید</p>
            <span> ۱۰,۰۰۰ تومان</span>
        </div>
        <div className={styles.row}>
            <p>هزینه ارسال</p>
            <span> ۵۰,۰۰۰ تومان</span>
        </div>
        <div className={styles.row}>
        <p>مبلغ قابل پرداخت</p>
        <span> ۴۹۰,۰۰۰ تومان</span>
        </div>
        <div className={styles.submit}>
            <button>ثبت سفارش</button>
            </div>
        </div>
        </div>
    </div>
    <Footer />

    </>
);
};

