import styles from  "../styles/UserProfile.module.scss";

export default function Profile () {
return (
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
        <span style={{marginRight:"105px"}} className={styles.value}>۴۵</span>
        </li>
        <li>
        <span className={styles.label}>تعداد سفارش‌ها</span>
        <span style={{marginRight:"90px"}} className={styles.value}>۷۰</span>
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
</div>
)
}