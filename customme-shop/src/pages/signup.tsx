import { useState } from "react";
import styles from "../styles/signup.module.scss";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import IsMobile from "../../hooks/mobile";

export default function Signup() {
  const isMobile = IsMobile();

  const [formData, setFormData] = useState({
    full_name: "",
    national_code: "",
    education: "",
    job: "",
    email: "",
    password: "",
    birth_date: "",
    province:"",
    city: "",
    phone: "",
    mobile: "",
    postal_code: "",
    full_address: "",

  });

  const [step, setStep] = useState(1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNextStep = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (step === 1 && formData.full_name && formData.national_code) {
      setStep(2);
    } else if (step === 1) {
      alert("لطفا تمام فیلدهای اجباری را پر کنید");
    } else if (
        step === 2 &&
        formData.email &&
        formData.password &&
        formData.mobile &&
        formData.phone
    ) {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/register/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
          alert("ثبت‌نام با موفقیت انجام شد");
        } else {
          const errorMessages = Object.values(data).flat().join("\n");
          alert("خطا:\n" + errorMessages);
        }
      } catch (err) {
        console.error("خطای ارتباط با سرور:", err);
        alert("خطایی رخ داد. لطفاً بعداً تلاش کنید.");
      }
    } else {
      alert("لطفا تمام فیلدهای اجباری را پر کنید");
    }
  };

  const handlePrevStep = () => {
    setStep(1);
  };

  return (
    <div >
      {!isMobile && <Navbar />}
      {step === 1 && ( 
        <img className={styles.stepper} src="/Stepper.svg" alt="stepper" />
      )}
      {step === 2 && ( 
        <img className={styles.stepper} src="/Stepper2.svg" alt="stepper" />
      )}
      {step === 1 && (
          <img className={styles.steppermobile} src="/Steppermobile1.svg" alt="stepper" />
      )}
      {step === 2 && (
          <img className={styles.steppermobile} src="/Steppermobile2.svg" alt="stepper" />
      )}
      <div className={styles.title}>
          <img src="/arrowr.svg" alt="arrow" className={styles.mobileOnly}   onClick={step === 2 ? handlePrevStep : undefined}
          />
        <h2 className={styles.desktopOnly}>فرم ثبت اطلاعات</h2>
        <p className={styles.mobileOnly}> فرم ثبت ‌نام</p>
      </div>
      <div className={styles.line}></div>
      {step === 1 && (
          <>
            <p className={styles.content}>اطلاعات کاربر</p>
            <p className={styles.nextStep}>مرحله بعد: اطلاعات تماس</p>
          </>
      )}
      {step === 2 && (
          <p className={styles.content}>اطلاعات تماس</p>
      )}
      <div className={styles.container}>
        <form className={`${styles.form} ${step === 2 ? styles["step-2"] : ""}`}  onSubmit={handleNextStep}>
          {step === 1 && (
            <>
              <div className={styles.row}>
                <div className={styles.inputGroup}>
                  <label>نام و نام خانوادگی </label>
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
                    <option value="" >انتخاب کنید</option>
                    <option value="دیپلم">دیپلم</option>
                    <option value="کارشناسی">کارشناسی</option>
                    <option value="کارشناسی ارشد">کارشناسی ارشد</option>
                    <option value="دکترا">دکترا</option>
                  </select>
                </div>
                <div className={styles.inputGroup}>
                  <label>شغل (اختیاری)</label>
                  <select name="job" value={formData.job} onChange={handleChange}>
                    <option value="">انتخاب کنید</option>
                    <option value="برنامه نویس">برنامه‌نویس</option>
                    <option value="طراح">طراح</option>
                    <option value="مدیر">مدیر</option>
                    <option value="سایر">سایر</option>
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
          <input type="date" name="birth_date" value={formData.birth_date} onChange={handleChange} style={{backgroundColor:"white"}} />
        </div>
              <button type="submit" className={styles.submitButton} >
                مرحله بعدی
                <img src="/arrow-left.svg" alt="arrow icon" />
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <div className={styles.row}>
                <div className={styles.inputGroup}>
                  <label>شماره موبایل</label>
                  <input type="number" name="mobile" value={formData.mobile} onChange={handleChange} />
                </div>
                <div className={styles.inputGroup}>
                  <label> شماره تلفن(همراه با کد شهر)</label>
                  <input type="number" name="phone" value={formData.phone} onChange={handleChange} />
                </div>
                </div>
                <div className={styles.row}>
              <div className={styles.inputGroup}>
              <label>استان</label>
                  <select name="province" value={formData.province} onChange={handleChange}>
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
              <div className={styles.row} >
              <div className={styles.inputGroup}>
                  <label> کدپستی</label>
                  <input type="text" name="postal_code" value={formData.postal_code} onChange={handleChange} />
                </div>
                <div className={styles.inputGroup}>
                  <label> آدرس کامل کدپستی (میتوانید از نقشه استفاده کنید)</label>
                  <input type="text" name="full_address" value={formData.full_address} onChange={handleChange} />
                </div>
              </div>

              {isMobile ? (
                  <div className={styles.buttonGroup}>
                    <button type="button" className={styles.backButton} onClick={handlePrevStep}>
                      <img src="/arrow-right.svg" alt="arrow icon" />

                      مرحله قبل
                    </button>
                    <button type="submit" className={styles.submitButton2}>
                      ثبت اطلاعات
                      <img src="/arrow-left.svg" alt="arrow icon" />
                    </button>
                  </div>
              ) : (
                  <button type="submit" className={styles.submitButton2}>
                    ثبت اطلاعات
                    <img src="/arrow-left.svg" alt="arrow icon" />
                  </button>
              )}

            </>
          )}
        </form>
        

        <div className={styles.imageContainer}>
          {step === 1 ? (
            <img src="/Photo.svg" className={styles.image} />
          ) : (
            <img src="/Photo2.svg" className={styles.imageTwo}/>
          )}
        </div></div>


      {!isMobile && <Footer />}
    </div>
  );
}
