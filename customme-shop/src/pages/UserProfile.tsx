import Footer from "../component/Footer";
import MainMenu from "../component/MainMenu";
import Navbar from "../component/Navbar";
import Profile from "../component/Profile";
import NavigationMobile from "../component/NavigationMobile.tsx";
import styles from "../styles/UserProfile.module.scss";
import { useEffect, useState } from "react";
import IsMobile from "../../hooks/mobile.ts";


interface UserStats {
    current_orders: number;
    delivered_orders: number;
    gallery_products: number;
    comments: number;
    canceled_orders: number;
    physical_products: number;
}
interface Product {
    id?: number;
    name: string;
    price: string;
    image: string;
    description: string;
}





export default function UserProfile() {
    const [userStats, setUserStats] = useState<UserStats | null>(null);
    const [products, setProducts] = useState<Product[]>([]);
    const Ismobile= IsMobile();
    useEffect(() => {
        const token = localStorage.getItem("token");

        fetch("http://localhost:8000/api/my-products/", {
            method: "GET",
            headers: {
                Authorization: `Token ${token}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("محصولات:", data);
                setProducts(data);
            })
            .catch((err) => console.error("خطا در گرفتن محصولات:", err));
    }, []);

    useEffect(() => {
        const token = localStorage.getItem("token");

        fetch("http://localhost:8000/api/user-stats/", {
            method: "GET",
            headers: {
                Authorization: `Token ${token}`,
            },
        })
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch user stats");
                return res.json();
            })
            .then((data) => setUserStats(data))
            .catch((err) => console.error("Error:", err));
    }, []);

    // const [profileData, setProfileData] = useState<any>(null);

    const product = {
    title: " تیشرت زنانه",
    price: "۱۵۰,۰۰۰",
};

    return(
        <>
        {!Ismobile && <Navbar /> }
        {!Ismobile && <MainMenu />}
          <div className={styles.container}>
          <Profile />
          <div className={styles.favoritescarousel}>
          <div>
      <h2 className={styles.categoriesTitle}>سفارشات من</h2>
      </div>
      <div className={styles.orderRow}>

      <div className={styles.orderItem}>
          <img src="/icon1.svg"  alt='order icon'/>
          <p>{userStats?.current_orders ?? "..." } سفارش</p>
          <span>جاری</span>
        </div>
        <div className={styles.orderItem}>
          <img src="/icon2.svg"  alt='order icon' />
            <p>{userStats?.delivered_orders ?? "..."} سفارش</p>
          <span>ارسال شده</span>
        </div>
        <div className={styles.orderItem}>
          <img src="/icon3.svg"  alt='order icon'/>
            <p>{userStats?.gallery_products ?? "..."} محصول</p>
          <span>در گالری</span>
        </div>
        <div className={styles.orderItem}>
          <img src="/icon4.svg"  alt='comment icon' />
            <p>{userStats?.comments ?? "..."} نظر</p>
          <span>ثبت شده</span>
        </div>

        <div className={styles.orderItem}>
          <img src="/icon5.svg" alt="products icon"  />
            <p>{userStats?.canceled_orders ?? "..."} سفارش</p>
          <span>لغو شده</span>
        </div>
        <div className={styles.orderItem}>
          <img src="/icon6.svg"  alt="products icon"/>
            <p>{userStats?.physical_products ?? "..."} محصول</p>
          <span>فیزیکی</span>
        </div>
    </div>
              <div  className={styles.categoriesTitle}>
                  <h3 style={{whiteSpace:"nowrap"}}>علاقه مندی های من</h3>
                  <p style={{whiteSpace:"nowrap"}}>مشاهده بیشتر</p>
              </div>
            <div className={styles.grid}>

                {products.slice(0, 3).map((product, index) => (
                    <div key={product.id || index} className={styles.card}>
                        <img
                            src={product.image}
                            alt={product.name}
                            className={styles.image}
                        />
                        <h3 className={styles.title}>
                            {product.name}
                            <img src="/Like2.svg" alt="like icon" />
                        </h3>
                        <p className={styles.desc}>{product.description}</p>
                        {index === 1 ? (
                            <button className={styles.add}>
                                <img src="/add.svg" alt="add" />
                                افزودن به گالری
                            </button>
                        ) : (
                            <p className={styles.price}>{product.price} تومان</p>
                        )}
                    </div>
                ))}

            </div>
              <div  className={styles.categoriesTitle}>
                  <h3 style={{whiteSpace:"nowrap"}}>خریدهای پرتکرار من</h3>
                  <p style={{whiteSpace:"nowrap"}}>مشاهده بیشتر</p>
              </div>
            <div className={styles.grid}>

            {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className={styles.card}>
                <img src="/hat.svg" alt={product.title} className={styles.image} />
                <h3 className={styles.title}>کلاه مردانه
                <img src="/Like.svg" alt="like icon" />
                </h3>
                <p className={styles.desc}>دارای رنگ بندی،قابل طراحی</p>
                <p className={styles.price}>{product.price} تومان</p>

           </div>

  ))}

            </div>
              <div  className={styles.categoriesTitle}>
              <h3 style={{whiteSpace:"nowrap"}}>گالری من</h3>
              <p style={{whiteSpace:"nowrap"}}>مشاهده بیشتر</p>
              </div>
            <div className={styles.grid}>

            {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className={styles.card}>
                <img src="/watermelon.svg" alt={product.title} className={styles.image} />
                <h3 className={styles.title}>استیکر هندوانه
                 <img src="/Like.svg"  alt="like icon" />
                </h3>
                <p className={styles.desc} >داری رنگ بندی،قابل طراحی</p>

                <button className={styles.add}>
                <img src='/add.svg' alt="add" />
                افزودن به گالری
                </button>
    </div>

  ))}

            </div>

        </div>


        </div>
            {!Ismobile && <Footer />}
            {Ismobile && <NavigationMobile />}
    </>
  );
}
