import Navbar from '../component/Navbar';
import Header from '../component/Header';
import styles from "../styles/Home.module.scss";
import Fallowcard from '../component/Fallowcard';
import Footer from '../component/Footer';
import MainMenu from '../component/MainMenu';
import IsMobile from "../../hooks/mobile";
import NavbarMobile from "../component/NavbarMobile";
import {useRef} from "react";
import NavigationHome from "../component/NavigationHome.tsx";
import FooterMobile from "../component/FooterMobile";

const categories = [
    { id: 1, name: "قاب موبایل", image: "/book.svg" },
    { id: 2, name: "کارت تبریک", image: "/book.svg" },
    { id: 3, name: "اکسسوری", image: "/book.svg" },
    { id: 4, name: "لوازم تحریر", image: "/book.svg" },
    { id: 5, name: "لباس", image: "/book.svg" },
    { id: 6, name: "دکور خانه", image: "/book.svg" },
];
const wedding = [
  "/bride1.svg",
  "/bride2.svg",
  "/bride3.svg",
  "/bride2.svg",
  "/bride3.svg",
  "/bride2.svg",
  
];
type CategoryProps = {
    title: string;
    image: string;
    isLarge?: boolean;
  };
  
  const discount: CategoryProps[] = [
    { title: "لوازم خانه", image: "/decor.svg", isLarge: true },
    { title: "مدرسه و اداره", image: "/school.svg" },
    { title: "پوشاک", image: "/school.svg" },
    { title: "استیکر", image: "/school.svg",  },
    { title: "دیجیتال", image: "/school.svg" },
  ];

export default function  Home ()  {

const ismobile = IsMobile();
const visibleImages = ismobile ? wedding.slice(0, 4) : wedding.slice(0, 6);

const product = {
        image: "tshirtred.svg",
        title: " تیشرت زنانه",
        price: "۱۵۰,۰۰۰",
    };
const popular = {
      image: "sticke.svg",
      title: "استیکر",
  };
  const profileData = {
    name: "نگار زمانی",
    followers: 400,
    designs: 56,
    sales: 370,
    profileImage: "https://example.com/my-profile.jpg",
    designsImages: [
      "/design.svg",
      "/design2.svg",
      "/design3.svg",
    ],
  };
    const scrollRef = useRef<HTMLDivElement>(null);
    const scrollLeft = () => {
        scrollRef.current?.scrollBy({ left: 100, behavior: "smooth" });
    };

    const scrollRight = () => {
        scrollRef.current?.scrollBy({ left: -100, behavior: "smooth" });
    };

    return (
    <div>
        {!ismobile && <Header />}
        {!ismobile &&  <Navbar />}
        {!ismobile && <MainMenu /> }
        {ismobile && <NavbarMobile />}
        <div className={styles.banner}>
        <div className={styles.bannerContent}>
        <div className={styles.title}>
        <h2 >آنلاین شاپ کاستومی</h2>
        </div>
        <div className={styles.description}>
        <p >
        آنلاین شاپ کاستومی محصولات متنوعی داره و این امکان رو بهتون میده خودتون رنگ و طرح و نوشته ی روی محصولات رو انتخاب کنید
        </p>
        </div>
        <div className={styles.buttons}>
        <button className={styles.startButton}>
            <img src='brush.svg' alt='brush' />
            شروع طراحی</button>
        <button className={styles.viewProducts}>دیدن محصولات</button>
        </div>
        </div>
    <div className={styles.bannerImage}>
        <img src="/banner.svg" alt="Custom Shop" />
    </div>
    </div>
    <div className={styles.categories}>
        <h3 style={{whiteSpace:"nowrap"}} className={styles.categoriesTitle}>
        <img src="/medal.svg" alt="medal" />
            دسته بندی محصولات
            <div className={styles.line}></div>
        </h3>
        {!ismobile &&
            <p style={{color:"#A72F3B",marginRight:"1240px",whiteSpace:"nowrap",marginTop:"-47px",fontWeight:"bold",fontSize:"14px"}}>مشاهده بیشتر</p>}
        {ismobile &&
            <div className={styles.flashes}>
                <img src="/flash-l.svg"  alt="flash-l" onClick={scrollLeft} style={{ cursor: 'pointer' }}/>
                <img src="/flash-r.svg" alt="flash-r" onClick={scrollRight} style={{ cursor: 'pointer' }} />
            </div>}

        <div className={styles.categoriesList} ref={scrollRef} >
        {categories.map((category) => (
            <div key={category.id} className={styles.categoryItem}>
                <img src={category.image} alt={category.name} className={styles.categoryImage} />
                <p className={styles.categoryName}>{category.name}</p>
            </div>
        ))}
        </div>
        </div>
        <h3 style={{ whiteSpace: "nowrap" }} className={styles.categoriesTitle}>
            <img src="/medal.svg" alt="medal" />
            پر فروش ترین ها
            <div style={{ width: "890px" }} className={styles.line}></div>
            <p  className={styles.show} style={{ whiteSpace: "nowrap" }}>مشاهده بیشتر</p>
        </h3>

        <div className={styles.grid}>
            {(ismobile
                    ? Array.from({ length: 4 })
                    : Array.from({ length: 8 })
            ).map((_, index) => (
                <div key={index} className={styles.card}>
                    <img
                        src={product.image}
                        alt={product.title}
                        className={styles.image}
                    />
                    <h3 className={styles.title}>
                        {product.title}
                        <img src="/Like.svg" />
                    </h3>
                    <p className={styles.explain}>داری رنگ بندی،قابل طراحی</p>
                    <p className={styles.price}>{product.price} تومان</p>
                </div>
            ))}
        </div>

        <h3 style={{whiteSpace:"nowrap"}} className={styles.categoriesTitle}>
        <img src="/discountshape.svg" alt="discountshape" />
        فروش ویژه  
          <div style={{width:"990px"}} className={styles.line}></div>
            <p style={{whiteSpace:"nowrap",marginRight:"140px"}}>مشاهده بیشتر</p>
            </h3>
    <div className={styles.gridtwo}>
      {discount.map((category, index) => (
        <div
          key={index}
          className={`${styles.discountcard} ${category.isLarge ? styles.large : ""}`}
          style={{ backgroundImage: `url(${category.image})` }}
        >
          <div className={styles.badge}>
            <img src="/discount.svg" alt="discount" className={styles.badgeIcon} />
          </div>
        </div>
      ))}
      
    </div>
    <h3 style={{whiteSpace:"nowrap"}} className={styles.categoriesTitle}>
        <img src="/likeshapes.svg" alt="discountshape" />
        طرح های پرطرفدار
          <div style={{width:"990px"}} className={styles.line}></div>
            <p className={styles.show} style={{whiteSpace:"nowrap"}}>مشاهده بیشتر</p>
            </h3>
    <div className={styles.grid}>

        {(ismobile
                ? Array.from({ length: 4 })
                : Array.from({ length: 8 })
        ).map((_, index) => (
        <div key={index} className={styles.card}>
            <img src={popular.image} alt={popular.title} className={styles.image} />
            <h3 className={styles.title}>{popular.title}
            <img src="/Like.svg" />
            </h3>
            <p className={styles.explain}> قابل طراحی و چاپ بر روی انواع محصولات</p>
            <button className={styles.add}>
              <img src='/add.svg' alt="add" />
              افزودن به گالری
            </button>
        
        </div>
        
    ))}
    
    </div>
    <h3 style={{whiteSpace:"nowrap"}} className={styles.categoriesTitle}>
        <img src="/star.svg" style={{width:"30px"}} alt="star" />
        طراحان برتر
          <div style={{width:"990px"}} className={styles.line}></div>
            <p style={{whiteSpace:"nowrap",marginRight:"140px"}}>مشاهده بیشتر</p>
            </h3>
    <div className={styles.fallow}>

        {(ismobile
                ? Array.from({ length: 4 })
                : Array.from({ length: 8 })
        ).map((_, index) => (
        <Fallowcard key={index} {...profileData} />
      ))}
    </div>
    <div className={styles.box}>
      <div className={styles.cardtwo}>
        <div className={styles.gifttext} >
          <h3>محصولات مناسب هدیه دادن به خانم‌ها</h3>
            {!ismobile && <button className={styles.button}>دیدن محصولات</button>}
            {ismobile && <p> دیدن محصولات</p>}
          </div>
          {!ismobile && <img className={styles.giftpic} src="/gift2.svg" alt="هدیه برای خانم‌ها" /> }
          {ismobile && <img src="/mom1.svg" className={styles.giftpic} /> }

      </div>
      <div className={styles.cardtwo}>
        <div className={styles.gifttext}>
          <h3>محصولات مناسب هدیه دادن به آقایان</h3>
            {!ismobile && <button className={styles.button}>دیدن محصولات</button>}
            {ismobile && <p> دیدن محصولات</p>}
          </div>
          {!ismobile &&  <img className={styles.giftpic} src="/gift.svg" alt="هدیه برای آقایان" />}
          {ismobile && <img src="/mom1.svg" className={styles.giftpic} /> }


      </div>
      
    </div>
        {ismobile && <h3 style={{whiteSpace:"nowrap"}} className={styles.categoriesTitle}>
            <img src="/star.svg" style={{width:"30px"}} alt="star" />
            جدیدترین طرح ها
            <div style={{width:"990px"}} className={styles.line}></div>
            <p style={{whiteSpace:"nowrap",marginRight:"100px"}}>مشاهده بیشتر</p>
        </h3>}
    <div className={styles.grid}>
      <div className={styles.bags} >
        <h4 className={styles.heading}>محصولاتی که طراحی شده رو ببینید و در صورت نیاز طرحشون رو مطابق سلیقه خودتون تغییر بدید</h4>
          <div className={styles.bag}>
              <img src='/sbag.svg' />
              <img src='/lbag.svg' />
          </div>

      </div>
        {(ismobile
                ? Array.from({ length: 4 })
                : Array.from({ length: 7 })
        ).map((_, index) => (
        <div key={index} className={`${styles.card} ${styles[`card${index}`]}`}>
            <img src="/totbag.svg" alt={popular.title} className={styles.image} />
            <h3 className={styles.title}>کیف زنانه
            <img src="/Like.svg" />
            </h3>
            <p className={styles.explain} style={{whiteSpace:"nowrap"}}> دارای رنگ بندی، قابل طراحی</p>
            <h3>۱۵۰,۰۰۰ تومان</h3>
        </div>
        
    ))}
    </div>

    <div className={styles.weddinginvite}>
      <div className={styles.images}>
        {visibleImages.map((src, index) => (
          <img key={index} src={src} alt={`Wedding ${index}`}  className={`${styles.image} ${ismobile ? styles[`mobileImg${index}`] : ""}`}/>
        ))}
      </div>
      <h2>کارت دعوت عروسی رو خودتون طراحی کنید</h2>
        <button className={styles.startButton2}>
            <img src='brush.svg' alt='brush' />
            <p>شروع طراحی</p></button>
                </div>
        <h3 style={{whiteSpace:"nowrap"}} className={styles.categoriesTitle}>
        <img src="/fav.svg" alt="star" />
        علاقمندی ها
          <div style={{width:"990px"}} className={styles.line}></div>
            <p style={{whiteSpace:"nowrap",marginRight:"130px"}}>مشاهده بیشتر</p>
            </h3>
            <div className={styles.grid}>
            
            {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className={styles.card}>
                <img src="/phone.svg" alt={product.title} className={styles.image} />
                <h3 className={styles.title}>قاب موبایل
                <img src="/Like2.svg" />
                </h3>
                <p className={styles.explain}>داری رنگ بندی،قابل طراحی</p>
    
                <p className={styles.price}>{product.price} تومان</p>
            
            </div>
        ))}
        </div>
        {!ismobile && <Footer /> }
        {ismobile && <FooterMobile />}
        {ismobile && <NavigationHome />}
    </div>
    
    
);
};

