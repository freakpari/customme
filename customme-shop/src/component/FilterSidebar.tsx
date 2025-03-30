import styles from "../styles/OtherProduct.module.scss";

export default function FilterSidebar  () {

    return (
    <aside className={styles.sidebar}>
        <div className={styles.toptext}>
        <h3>فیلتر ها</h3>
        <p>حذف فیلترها</p>
        </div>
        <div className={styles.dropdown}>
        <div className={styles.header}>
            <span>برند</span>
            <img style={{marginRight : "230px"}} src="/arrowdown.svg"  />
        </div>
    </div>
    <div className={styles.dropdown}>
        <div className={styles.header} >
        <span>اندازه</span>
        <img  style={{marginRight : "222px"}} src="/arrowdown.svg"  />
        </div>
        </div>
        <div className={styles.dropdown}>
        <div className={styles.header} >
        <span>رنگ</span>
        <img style={{marginRight : "230px"}} src="/arrowdown.svg"  />
        </div>
        </div>
        <div className={styles.header} >
        <span>ارسال امروز</span>
        <img  style={{marginRight : "162px"}} src="/SwitchButton.svg" />
        </div>
        <div className={styles.header} >
        <span>فقط کالاهای موجود</span>
        <img  style={{marginRight : "112px"}} src="/SwitchButton.svg" />
        </div>
        <div className={styles.dropdown}>
        <div className={styles.header} >
        <span>محدوده قیمت</span>
        <img  style={{marginRight : "164px"}} src="/arrowdown.svg"  />
        </div>
        </div>
        <div className={styles.dropdown}>
        <div className={styles.header} >
        <span>مدل</span>
        <img  style={{marginRight : "228px"}} src="/arrowdown.svg"  />
        </div>
        </div>
        <div className={styles.dropdown}>
        <div className={styles.header} >
        <span>طرح</span>
        <img  style={{marginRight : "229px"}} src="/arrowdown.svg"  />
        </div>
        </div>
    </aside>

    );
};
