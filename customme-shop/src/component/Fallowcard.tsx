import React from "react";
import styles from "../styles/Fallowcard.module.scss";
import IsMobile from "../../hooks/mobile.ts";
interface ProfileCardProps {
  name: string;
  followers: number;
  designs: number;
  sales: number;
  profileImage: string;
  designsImages: string[];
}
const Fallowcard: React.FC<ProfileCardProps> = ({
  name,
  followers,
  designs,
  sales,
  designsImages,
}) => {
    const ismobile = IsMobile();
    return (
    <div className={styles.profilecard}>
      <div className={styles.profileheader}>
        <img className={styles.profileimage} src="/negar.svg" alt={name} />
        <h2 className={styles.profilename}>{name}</h2>
      </div>
      <div className={styles.profilestats}>
        <span className={styles.stateItems}>{`دنبال کنندگان: ${followers}`}</span>
        <span className={styles.stateItems}>{`تعداد طرح ها: ${designs}`}</span>
        <span className={styles.stateItems}>{`آمار فروش: ${sales}`}</span>
      </div>
        {!ismobile &&
      <div className={styles.designs}>
        {designsImages.map((image, index) => (
        <img key={index} className={styles.designimage} src={image} alt="Design" />
        ))}
      </div>
        }
      <button className={styles.add}>
              <img src='/fallow.svg' alt="add" />
               دنبال کردن
            </button>
    </div>
    
  );
};

export default Fallowcard;
