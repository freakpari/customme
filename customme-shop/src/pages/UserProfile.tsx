import Footer from "../component/Footer";
import MainMenu from "../component/MainMenu";
import Navbar from "../component/Navbar";
import Profile from "../component/Profile";
import styles from "../styles/UserProfile.module.scss";




  
export default function UserProfile() {
  const product = {
    title: " تیشرت زنانه",
    price: "۱۵۰,۰۰۰",
};

    return(
        <>
          <Navbar />
          <MainMenu />
          <div className={styles.container}>
          <Profile />
          
          <div className={styles.favoritescarousel}>
          <div>
      <h2 className={styles.categoriesTitle}>سفارشات من</h2>
      </div>
      <div className={styles.orderRow}>
      
      <div className={styles.orderItem}>
          <img src="/icon1.svg" className={styles.icon} />
          <p>۴۵ سفارش</p>
          <span>جاری</span>
        </div>
        <div className={styles.orderItem}>
          <img src="/icon2.svg" className={styles.icon} />
          <p>۴۵ سفارش</p>
          <span>ارسال شده</span>
        </div>
        <div className={styles.orderItem}>
          <img src="/icon3.svg" className={styles.icon} />
          <p>۱۰ محصول</p>
          <span>در گالری</span>
        </div>
        <div className={styles.orderItem}>
          <img src="/icon4.svg" className={styles.icon} />
          <p>۵۴ نظر</p>
          <span>ثبت شده</span>
        </div>

        <div className={styles.orderItem}>
          <img src="/icon5.svg" className={styles.icon} />
          <p>۲۱۵ سفارش</p>
          <span>لغو شده</span>
        </div>
        <div className={styles.orderItem}>
          <img src="/icon6.svg" className={styles.icon} />
          <p>۲۸ محصول</p>
          <span>فیزیکی</span>
        </div>
    </div>
    <h3 style={{whiteSpace:"nowrap"}} className={styles.categoriesTitle}>
      علاقمندی های من
            <p style={{whiteSpace:"nowrap",marginRight:"500px"}}>مشاهده بیشتر</p>
            </h3>
            <div className={styles.grid}>
            
            {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className={styles.card}>
                <img src="/sticker.svg" alt={product.title} className={styles.image} />
                <h3 className={styles.title}>استیکر فرندز 
                <img src="/Like2.svg" />
                </h3>
                <p>داری رنگ بندی،قابل طراحی</p>
                {index === 1 ? (
                <button className={styles.add}>
                <img src='/add.svg' alt="add" />
                افزودن به گالری
                </button>
                ) : (
                <p className={styles.price}>{product.price} تومان</p>
                )}
    </div>

  ))}
                
            </div>
            <h3 style={{whiteSpace:"nowrap"}} className={styles.categoriesTitle}>
            خرید های پرتکرار من            
            <p style={{whiteSpace:"nowrap",marginRight:"470px"}}>مشاهده بیشتر</p>
            </h3>
            <div className={styles.grid}>
            
            {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className={styles.card}>
                <img src="/hat.svg" alt={product.title} className={styles.image} />
                <h3 className={styles.title}>کلاه مردانه
                <img src="/Like.svg" />
                </h3>
                <p>داری رنگ بندی،قابل طراحی</p>
                
                <p className={styles.price}>{product.price} تومان</p>
                
    </div>

  ))}
                
            </div>
            <h3 style={{whiteSpace:"nowrap"}} className={styles.categoriesTitle}>
              گالری من
        <p style={{whiteSpace:"nowrap",marginRight:"580px"}}>مشاهده بیشتر</p>
            </h3>
            <div className={styles.grid}>
            
            {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className={styles.card}>
                <img src="/watermelon.svg" alt={product.title} className={styles.image} />
                <h3 className={styles.title}>استیکر هندوانه 
                <img src="/Like.svg" />
                </h3>
                <p>داری رنگ بندی،قابل طراحی</p>
                
                <button className={styles.add}>
                <img src='/add.svg' alt="add" />
                افزودن به گالری
                </button>                
    </div>

  ))}
                
            </div>
            
        </div>
        
    
        </div>
      <Footer />
    </>
  );
}