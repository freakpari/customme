import React, { useState } from "react";
import styles from "../styles/signup.module.scss"
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    nationalId: "",
    education: "",
    job: "",
    email: "",
    password: "",
    birthDate: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <Navbar />
      <img className={styles.stepper} src="/Stepper.svg" alt="stepper" />
      <h2 className={styles.title}>فرم ثبت اطلاعات</h2>

      <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
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
            <label>آدرس ایمیل</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
          </div>
          <div className={styles.inputGroup}>
            <label>کلمه عبور</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} />
          </div>
        </div>
        <div className={styles.inputGroup}>
          <label>تاریخ تولد</label>
          <input type="date" name="birthDate" value={formData.birthDate} onChange={handleChange} />
        </div>
        <button type="submit" className={styles.submitButton}>مرحله بعدی
          <img src="/arrow-left.svg" alt="arrow icon" />
        </button>
      </form>
      <div className={styles.imageContainer}>
        <img  src="/Photo.svg"className={styles.image}  />
      </div>
    </div>
    <Footer />
    </div>
    
  );
};

export default RegistrationForm;
