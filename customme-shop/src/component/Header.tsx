import styles from "../styles/header.module.scss";

export default function  Header ()  {
  return (
    <nav>
      <div className={styles.header}>
        <p className={styles.text}>
        با عضویت در کاستومی اولین سفارش خود را "رایگان" تحویل بگیرید
        </p>
      </div>
    </nav>
  );
};
