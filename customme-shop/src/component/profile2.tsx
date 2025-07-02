import styles from  "../styles/UserProfile.module.scss";
import {useState,useEffect} from "react";
import {useNavigate} from "react-router-dom";

export default function Profiletwo () {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        full_name: "",
        email:""
    });

    const [sideProfile, setSideProfile] = useState({
        profile_image: "",
        purchase_score: "",
        orders_count: "",
        total_designs: "",
    });

    useEffect(() => {
        const token = localStorage.getItem("token");
console.log(token);
        fetch("http://localhost:8000/api/account-info/", {
            method: "GET",
            headers: {
                "Authorization": `Token ${token}`,
            },
        })
            .then((res) => res.json())
            .then((data) => setFormData(data))
            .catch((err) => console.error("Error fetching user data:", err));


        fetch("http://localhost:8000/api/side-profile/", {
            method: "GET",
            headers: {
                Authorization: `Token ${token}`,
            },
        })
            .then((res) => res.json())
            .then((data) => setSideProfile(data))
            .catch((err) => console.error("Error fetching side profile:", err));
    }, []);
return (
    <div className={styles.profileSection}>
    <div className={styles.profileCard}>
    <img    src={
        sideProfile.profile_image
            ? `http://localhost:8000${sideProfile.profile_image}`
            : "/img.png"
    }
          alt="Profile" className={styles.profileImage} />
        <h2 >{formData.full_name}</h2>
        <p style={{marginRight:"-20px"}}>{formData.email}</p>
        </div>

        <div className={styles.profileDetails}>
        <ul>
        <li>
        <span className={styles.label}>اعتبار خرید</span>

        <span className={styles.value} style={{ direction: "rtl" }}>{sideProfile.purchase_score},000
            تومان
        </span>
        </li>
        <li>
        <span className={styles.label}>تعداد طرح‌ها</span>
        <span style={{marginRight:"105px"}} className={styles.value}>  {sideProfile.total_designs}</span>
        </li>
        <li>
        <span className={styles.label}>تعداد سفارش‌ها</span>
        <span  style={{marginRight:"90px"}} className={styles.value}>
            {sideProfile.orders_count}
</span>
</li>
</ul>
</div>
<div className={styles.menu}>
<button onClick={() => navigate('/userprofile')}>
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
<button className={styles.dashboard}>
<img src="/user2.svg" />
اطلاعات حساب کاربری</button>
<button>
<img src="/logout.svg" />
خروج</button>
</div>
</div>
)
}
