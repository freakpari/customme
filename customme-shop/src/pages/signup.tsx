import React, { useState } from "react";
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import styles from "../styles/signup.module.scss";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";


const libraries = ["places"] as const;
const mapContainerStyle = {
  width: '600px',
  height: '300px',
  marginTop: '32px',  

  
};
const center = {
  lat: 32.6546,    
  lng: 51.6679,
};
export default function Signup() {
  const [formData, setFormData] = useState({
    fullName: "",
    nationalId: "",
    education: "",
    job: "",
    email: "",
    password: "",
    birthDate: "",
    city:"",
    PhoneNumber:"",
    zipcode:"",
    address:"",
    location: { lat: 35.6892, lng: 51.389 }, 

  });
  const [step, setStep] = useState(1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNextStep = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (step === 1 && formData.fullName && formData.nationalId) {
      setStep(step + 1);
    } else if (step === 1) {
      alert("لطفا تمام فیلدهای اجباری را پر کنید");
    } else if (step === 2 && formData.email && formData.password) {
      console.log("فرم ثبت شد:", formData);
    } else {
      alert("لطفا تمام فیلدهای اجباری را پر کنید");
    }
  };
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyBmi8seMOLNd6m2qeOw89AzaSenwT7-W-M',
    libraries,
  });
  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }
  

  return (
    <div>
      <Navbar />
      <img className={styles.stepper} src="/Stepper.svg" alt="stepper" />
      <div className={styles.title}>
      <h2 >فرم ثبت اطلاعات</h2>
      </div>
      <div className={styles.container}>
        <form className={`${styles.form} ${step === 2 ? styles["step-2"] : ""}`}  onSubmit={handleNextStep}>
          {step === 1 && (
            <>
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
              <button type="submit" className={styles.submitButton} >
                مرحله بعدی
                <img src="/arrow-left.svg" alt="arrow icon" />
              </button>
            </>
          )}

          {step === 2 && (
            <>
            {/* <form className={styles.containertwo}> */}
              <div className={styles.row}>
                <div className={styles.inputGroup}>
                  <label>شماره موبایل</label>
                  <input type="text" name="phonenumber" value={formData.PhoneNumber} onChange={handleChange} />
                </div>
                <div className={styles.inputGroup}>
                  <label> شماره تلفن(همراه با کد شهر)</label>
                  <input type="text" name="phonenumber" value={formData.PhoneNumber} onChange={handleChange} />
                </div>
                </div>
                <div className={styles.row}>
              <div className={styles.inputGroup}>
              <label>استان</label>
                  <select name="ciyt" value={formData.city} onChange={handleChange}>
                    <option value="">انتخاب کنید</option>
                    <option value="tehran">تهران</option>

                  </select>
                  </div>
                  <div className={styles.inputGroup}>
                  <label>شهر</label>
                    <select name="city" value={formData.city} onChange={handleChange}>
                    <option value="">انتخاب کنید</option>
                    <option value="tehran">تهران</option>
                  </select>  
              </div>
              
              </div>
              <div className={styles.inputGroup}>
                  <label> کدپستی</label>
                  <input type="text" name="zipcode" value={formData.zipcode} onChange={handleChange} />
                </div>
                <div className={styles.address}>
                  <label> آدرس کامل کدپستی (میتوانید از نقشه استفاده کنید)</label>
                  <input type="text" name="address" value={formData.address} onChange={handleChange} />
                  <div>
                  <GoogleMap
                  mapContainerStyle={mapContainerStyle}
                  zoom={50}
                  center={center}
                  >
                  <Marker position={center} />
                  </GoogleMap>
                  </div>
                </div>
              <button type="submit" className={styles.submitButton} style={{ marginTop: "372px" }}>
                ثبت اطلاعات
                <img src="/arrow-left.svg" alt="arrow icon" />
              </button>
              {/* </form> */}
            </>
          )}
        </form>
        

        <div className={styles.imageContainer}>
          {step === 1 ? (
            <img src="/Photo.svg" className={styles.image} />
          ) : (
            <img src="/Photo2.svg" className={styles.imagetwo} />
          )}
        </div>
      </div>


      <Footer />
    </div>
  );
}
