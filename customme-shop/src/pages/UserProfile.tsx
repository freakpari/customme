import Footer from "../component/Footer";
import MainMenu from "../component/MainMenu";
import Navbar from "../component/Navbar";
import styles from "../styles/UserProfile.module.scss";
import { FaCheckCircle, FaTimesCircle, FaCommentDots, FaBoxOpen, FaImages, FaEllipsisH } from "react-icons/fa";



const favoriteItems = [
  {
    id: 1,
    title: "کیف زنانه",
    description: "دارای رنگ بندی، قابل طراحی",
    price: "150,000 تومان",
    image: "bag.svg",
  },
    {
      id: 2,
      title: "استیکر فرندز",
      description: "قابل طراحی و چاپ بر روی انواع محصولات",
      price: "150,000 تومان",
      image: "sticker.svg",
    },
  
    {
      id: 3,
      title: "جوراب زنانه",
      description: "دارای رنگ بندی، قابل طراحی",
      price: "150,000 تومان",
      image: "socks.svg",
    },
  ];
  const titles = ["علاقه مندی های من", "گالری من","خریدهای پرتکرار من "];

  
export default function UserProfile() {
    return(
        <>
          <Navbar />
          <MainMenu />
          <div className={styles.container}>
                <div className={styles.profileSection}>
                    <div className={styles.profileCard}>
                    <img src="/profile.svg" alt="Profile" className={styles.profileImage} />
                        <h2 >نگار زمانی</h2>   
                        <p>xxxxxx@yahoo.com</p>
                        </div>

                        <div className={styles.profileDetails}>
            <ul>
                <li>
                    <span className={styles.label}>اعتبار خرید</span>
                    <span className={styles.value}>۱۰۰,۰۰۰ تومان</span>
                </li>
                <li>
                    <span className={styles.label}>تعداد طرح‌ها</span>
                    <span className={styles.value}>۴۵</span>
                </li>
                <li>
                    <span className={styles.label}>تعداد سفارش‌ها</span>
                    <span className={styles.value}>۷۰</span>
                </li>
            </ul>
        </div>
            <div className={styles.menu}>
              <button className={styles.dashboard}>
                <img src="/home.svg" alt="home-icon" />
                داشبورد
                </button>
              <button > 
                <img src="/activity.svg" />
                تاریخچه سفارشات</button>
              <button >
                <img src="/gallery.svg" />
                گالری</button>
              <button>
                <img src="/loc.svg" /> 
                آدرس ها
              </button>
              <button> 
              <img src="/user.svg" />
              دنبال شوندگان
              </button>
            <button>
            <img src="/inform.svg" />
            اطلاعات حساب کاربری</button>
            <button> 
              <img src="/logout.svg" />
              خروج</button>
          </div>
          </div>
          
          <div className={styles.favoritescarousel}>
          <div className={styles.ordersContainer}>
      <h2 className={styles.title}>سفارشات من</h2>

      <div className={styles.orderRow}>
        <div className={styles.orderItem}>
          <FaImages className={styles.icon} />
          <p>۱۰ محصول</p>
          <span>در گالری</span>
        </div>

        <div className={styles.orderItem}>
          <FaBoxOpen className={styles.icon} />
          <p>۲۸ محصول</p>
          <span>فیزیکی</span>
        </div>

        <div className={styles.orderItem}>
          <FaCheckCircle className={styles.icon} />
          <p>۴۵ سفارش</p>
          <span>ارسال شده</span>
        </div>

        <div className={styles.orderItem}>
          <FaTimesCircle className={styles.icon} />
          <p>۲۱۵ سفارش</p>
          <span>لغو شده</span>
        </div>
        <div className={styles.orderItem}>
          <FaEllipsisH className={styles.icon} />
          <p>۴۵ سفارش</p>
          <span>جاری</span>
        </div>

        <div className={styles.orderItem}>
          <FaCommentDots className={styles.icon} />
          <p>۵۴ نظر</p>
          <span>ثبت شده</span>
        </div>
      </div>
    </div>

          {titles.map((title, index) => (
            <div key={index}>
              <h2>{title}</h2> 
              <div className={styles.carouselcontainer}>
                {favoriteItems.map((item) => (
                  <div key={item.id} className={styles.carouselitem}>
                    <img src={item.image} alt={item.title} />
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    {item.price && <p className="price">{item.price}</p>}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}