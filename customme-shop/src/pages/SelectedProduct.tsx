import styles from '../styles/Selectedproduct.module.scss';
import { FaStar} from "react-icons/fa";
import Navbar from '../component/Navbar';
import MainMenu from '../component/MainMenu';
import Footer from '../component/Footer';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ReviewModal from '../component/ReviewModal';

interface Review {
  id: number;
  name:string;
  user: string;
  date: string;
  rating: number;
  comment: string;
  pros: string[];
  cons: string[];
}

const reviews: Review[] = [
  {
    id: 1,
    name:"نگار زمانی",
    user: "خریدار",
    date: "16 آذر 1403",
    rating: 3,
    comment: "بسیار عالی و با کیفیت",
    pros: ["با کیفیت","خنک"],
    cons: ["گران"],
  },
  {
    id: 2,
    name:"نگار زمانی",
    user: "خریدار",
    date: "16 آذر 1403",
    rating: 4,
    comment: "بسیار عالی و با کیفیت",
    pros: ["با کیفیت","خنک"],
    cons:["گران"],
    
  },
  {
    id: 3,
    name:"نگار زمانی",
    user: "خریدار",
    date: "16 آذر 1403",
    rating: 5,
    comment: "بسیار عالی و با کیفیت",
    pros: ["با کیفیت","خنک"],
    cons: ["گران"],
    
  },
];
export default function Selectedproduct () {
  const [allReviews, setAllReviews] = useState<Review[]>(reviews);
  const [showModal, setShowModal] = useState(false);

  const handleAddReview = (review: Review) => {
    setAllReviews([review, ...allReviews]);
  };


  return (
    <>
    <Navbar />
    <MainMenu />
    <div className={styles.container}>
      <div className={styles.productDetails}>
        <div className={styles.imageSection}>
            <img src="/select.svg" alt="t-shirt" />
        </div>
        <div className={styles.detailsSection}>
          <h2 className={styles.productTitle}>مشخصات محصول</h2>
          <p>جنس: نخ پلی استر</p>
          <p>شستشو: با دست</p>
          <p>سایز ها: S, M, L, XL, XXL, XXXL</p>
          <p>رنگ ها: مشکی، سفید، قرمز، سبز، نارنجی،زشکی، بنفش</p>
          <p>قد: ۶۰ سانتی متر</p>
          <select className={styles.sizebutton}>
            <option value="default">M</option>
          </select>
          <span className={styles.price}>۱۳۷,۰۰۰ تومان</span>
          <div className={styles.priceSection}>
          <button className={styles.addtopersonal} >
              <img src='/magic.svg' alt='magic icon' />
              شخصی سازی محصول</button>

              <Link to="/cart" >
            <button className={styles.addToCart}>
              <img src='/shopping.svg' alt='shop icon' />
              افزودن به سبد</button>
              </Link>
              </div>

          </div>
        </div>
      <div className={styles.centerSection}>
        <p style={{color:"#898989"}}> <img src="/up.svg"  />۷۰٪ ( ۱۲۰ نفر) از خرید این محصول رضایت داشته اند</p>
        <div className={styles.shirtImage}>
          <img src='/tshirtred.svg' />
          <img src='/tshirtblack.svg' />
          <img src='/tshirtwhite.svg' />
        </div>
        <p style={{color:"#434343"}}>مشاهده بیشتر</p>
        </div>
      <div className={styles.reviewsSection}>
        <h3>امتیاز و دیدگاه کاربران</h3>
        <div className={styles.ratingSummary}>
          <p className={styles.rating}><span>۴.۱</span> از ۵</p>
          <div className={styles.stars}>
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className={i < 4 ? styles.filledStar : styles.emptyStar} />

            ))}
            <p>از مجموع ۱۲۰ امتیاز </p>
          </div>
          <p>نظر خود را ثبت کنید</p>
          {showModal && (
    <ReviewModal onClose={() => setShowModal(false)} onSubmit={handleAddReview} />
  )}
          <button onClick={() => setShowModal(true)}>ثبت دیدگاه</button>
        </div>
        </div>
        
        <div className={styles.reviewsContainer}>
      {allReviews.map((review) => (
        <div key={review.id} className={styles.reviewCard}>
          <div className={styles.header}>
            <span className={styles.date}>{review.date}</span>
            <span className={styles.name}>{review.name}</span>
            <span className={styles.user}>{review.user}</span>
            <div className={styles.rating}>
            {[...Array(review.rating)].map((_, i) => (
              <FaStar key={i} className={styles.star} />
            ))}
          </div>
          </div>
          <p className={styles.comment}>{review.comment}</p>
          <div className={styles.features}>
            <div className={styles.pros}>
              {review.pros.map((pro, i) => (
                <p key={i} className={styles.pro}><span style={{color:"#00966D"}}>+</span> {pro}</p>
              ))}
            </div>

            <div className={styles.cons}>
              {review.cons.map((con, i) => (
                <p key={i} className={styles.cons}><span style={{color:"#C30000"}}>-</span>{con}</p>
              ))}
            </div>
            </div>

          <div className={styles.feedback}>
            <span>آیا این دیدگاه مفید بود؟</span>
            <img src="/up.svg" />
            <img src="dislike.svg" />
          </div>
        </div>
      ))}
    </div>
    </div>
    <Footer />

    </>
  );
};
