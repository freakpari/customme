import styles from "../styles/mainMenu.module.scss";
import React from "react";
export default function MainMenu(){
    return(
        <div className={styles.container}>
            <button className={styles.designButton}>
                <img src="/magicpen.svg" alt="magicpen" />
            <span className="ml-1">خودت طراحی‌اش کن!</span>
        </button>
        <div className={styles.navItems}>
            {['پوشاک', 'لوازم خانه', 'قاب موبایل', 'اکسسوری', 'مدرسه و اداره', 'کارت و پوستر', 'جشن و مهمانی'].map((item, index) => (
                <React.Fragment key={index}>
                    <span>{item}</span>
                </React.Fragment>
            ))}
        </div>
    
    </div>
    )
}