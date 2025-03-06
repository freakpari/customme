import styles from "../styles/header.module.scss";

const Header = () => {
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
export default Header;
