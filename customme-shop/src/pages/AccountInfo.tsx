import Navbar from "../component/Navbar";
import MainMenu from "../component/MainMenu";
import Profiletwo from "../component/profile2";
import { useState } from "react";
import Footer from "../component/Footer";
import styles from "../styles/AccountInfo.module.scss";

export default function AccountInfo() {
    const [formData, setFormData] = useState({
        fullName: "",
        nationalId: "",
        education: "",
        job: "",
        birthDate: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    
   
    return(
        <>
        <Navbar />
        <MainMenu />
        <div className={styles.maincontent}>
        <Profiletwo />
        <div className={styles.container}>
        <div className={styles.heading}>
        <h2>اطلاعات حساب کاربری</h2>
        </div>
        <div className={styles.tabs}>
        <span className={styles.activeTab}>اطلاعات کاربری</span>
        <span>اطلاعات تماس</span>
        </div>
        <form className={styles.form} >
        <div className={styles.row}>
                <div className={styles.inputGroup}>
                <label>نام و نام خانوادگی</label>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
                </div>
                <div className={styles.inputGroup}>
                  <label>کد ملی</label>
                  <input type="text" name="nationalId" value={formData.nationalId} onChange={handleChange} />
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.inputGroup}>
                  <label>تحصیلات (اختیاری)</label>
                  <select name="education" value={formData.education} onChange={handleChange}>
                    <option value="">انتخاب کنید</option>
                    <option value="diploma">دیپلم</option>
                    <option value="bachelor">کارشناسی</option>
                    <option value="master">کارشناسی ارشد</option>
                    <option value="phd">دکترا</option>
                  </select>
                </div>
                <div className={styles.inputGroup}>
                  <label>شغل (اختیاری)</label>
                  <select name="job" value={formData.job} onChange={handleChange}>
                    <option value="">انتخاب کنید</option>
                    <option value="developer">برنامه‌نویس</option>
                    <option value="designer">طراح</option>
                    <option value="manager">مدیر</option>
                    <option value="other">سایر</option>
                  </select>
                </div>
              </div>
              <div className={styles.row}>
          <div className={styles.inputGroup}>
          <label>تاریخ تولد</label>
          <input type="date" name="birthDate" value={formData.birthDate} onChange={handleChange} />
            
          </div>
          <div className={styles.inputGroup}>
          <label>آدرس ایمیل</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.inputGroup}>
            <label>کلمه عبور</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} />
          </div>
          <div className={styles.inputGroup}>
            <label> تکرار کلمه عبور</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} />
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
    )

}