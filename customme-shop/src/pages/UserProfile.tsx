import Footer from "../component/Footer";
import MainMenu from "../component/MainMenu";
import Navbar from "../component/Navbar";
import Profile from "../component/Profile";
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
          <Profile />
          
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