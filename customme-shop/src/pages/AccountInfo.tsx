import { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import MainMenu from "../component/MainMenu";
import Profiletwo from "../component/profile2";
import Footer from "../component/Footer";
import styles from "../styles/AccountInfo.module.scss";

export default function AccountInfo() {
    const [formData, setFormData] = useState({
        full_name: "",
        national_code: "",
        education: "",
        email:"",
        job: "",
        birth_date: "",
        password: "",
        confirmPassword: "",
    });

    useEffect(() => {
        const token = localStorage.getItem("token");

        fetch("http://localhost:8000/api/account-info/", {
            method: "GET",
            headers: {
                "Authorization": `Token ${token}`,
            },
        })
            .then((res) => res.json())
            .then((data) => setFormData(data))
            .catch((err) => console.error("Error fetching user data:", err));
        if (formData.password !== formData.confirmPassword) {
            alert("کلمه‌های عبور با هم مطابقت ندارند");
            return;}
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const token = localStorage.getItem("token");

        if (formData.password || formData.confirmPassword) {
            if (formData.password !== formData.confirmPassword) {
                alert("کلمه‌های عبور با هم مطابقت ندارند");
                return;
            }
        }

        const dataToSend = { ...formData };
        if (!formData.password) {
            delete dataToSend.password;
            delete dataToSend.confirmPassword;
        }

        fetch("http://localhost:8000/api/account-info/", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${token}`,
            },
            body: JSON.stringify(dataToSend),
        })
            .then((res) => res.json())
            .then((data) => {
                if (formData.password) {
                    localStorage.removeItem("token");
                    alert("رمز عبور تغییر کرد. لطفاً دوباره وارد شوید.");
                    window.location.href = "/login";
                } else {
                    alert("اطلاعات با موفقیت به‌روزرسانی شد.");
                }
            })
            .catch((err) => console.error("Error updating user data:", err));
    };



    return (
        <>
            <Navbar />
            <MainMenu />
            <div className={styles.maincontent}>
                <Profiletwo />
                <div className={styles.container}>
                    <div className={styles.heading}>
                        <h2>اطلاعات حساب کاربری</h2>
                    </div>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.row}>
                            <div className={styles.inputGroup}>
                                <label>نام و نام خانوادگی</label>
                                <input type="text" name="full_name" value={formData.full_name} onChange={handleChange} />
                            </div>
                            <div className={styles.inputGroup}>
                                <label>کد ملی</label>
                                <input type="text" name="national_code" value={formData.national_code} onChange={handleChange} />
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.inputGroup}>
                                <label>تحصیلات (اختیاری)</label>
                                <select name="education" value={formData.education} onChange={handleChange}>
                                    <option value="">انتخاب کنید</option>
                                    <option value="دیپلم">دیپلم</option>
                                    <option value="کارشناسی">کارشناسی</option>
                                    <option value="کارشناسی ارشد">کارشناسی ارشد</option>
                                    <option value="دکترا">دکترا</option>
                                </select>
                            </div>
                            <div className={styles.inputGroup}>
                                <label>شغل (اختیاری)</label>
                                <select name="job" value={formData.job || ""} onChange={handleChange}>
                                    <option value="">انتخاب کنید</option>
                                    <option value="برنامه‌نویس">برنامه‌نویس</option>
                                    <option value="طراح">طراح</option>
                                    <option value="مدیر">مدیر</option>
                                    <option value="سایر">سایر</option>
                                </select>
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.inputGroup}>
                                <label>تاریخ تولد</label>
                                <input type="date" name="birth_date" value={formData.birth_date} onChange={handleChange} />
                            </div>
                            <div className={styles.inputGroup}>
                                <label>ایمیل</label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange}  />
                            </div>
                        </div>
                        <div className={styles.row}>

                        <div className={styles.inputGroup}>
                                <label>رمز عبور</label>
                                <input type="password" name="password" value={formData.password} onChange={handleChange}  />
                            </div>
                            <div className={styles.inputGroup}>
                                <label> تکرار رمز عبور</label>
                                <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange}  />
                            </div>
                        </div>


                        <button type="submit" className={styles.submitButton}>
                            ثبت اطلاعات
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}
