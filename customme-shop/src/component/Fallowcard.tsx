import React from "react";
import styles from "../styles/Fallowcard.module.scss";

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
  return (
    <div className={styles.profilecard}>
      <div className={styles.profileheader}>
        <img className={styles.profileimage} src="/negar.svg" alt={name} />
        <h2 className={styles.profilename}>{name}</h2>
      </div>
      <div className={styles.profilestats}>
        <span>{`دنبال کنندگان: ${followers}`}</span>
        <span>{`تعداد طرح ها: ${designs}`}</span>
        <span>{`آمار فروش: ${sales}`}</span>
      </div>
      <div className={styles.designs}>
        {designsImages.map((image, index) => (
        <img key={index} className={styles.designimage} src={image} alt="Design" />
        ))}
      </div>
      <button className={styles.add}>
              <img src='/fallow.svg' alt="add" />
              افزودن به گالری
            </button>
    </div>
    
  );
};

export default Fallowcard;
