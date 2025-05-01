import styles from "../styles/MainMenu.module.scss";
import React from "react";
import { useState } from "react";
import CaseModal from "./CaseModal";

const cases = new Array(9).fill(0).map((_, i) => ({
    id: i,
    name: "آیفون",
    image: "/iphon.svg",
  }));
  
export default function MainMenu(){
    const [showModal, setShowModal] = useState(false);
    const handleClick = (item: string) => {
        if (item === "قاب موبایل") {
          setShowModal(true);
        }
      };

    return(
        <div className={styles.container}>
            <button className={styles.designButton}>
                <img src="/magicpen.svg" alt="magicpen" />
            <span className="ml-1">خودت طراحیش کن!</span>
        </button>
        <div className={styles.navItems}>
            {['پوشاک', 'لوازم خانه', 'قاب موبایل', 'اکسسوری', 'مدرسه و اداره', 'کارت و پوستر', 'جشن و مهمانی'].map((item, index) => (
                <React.Fragment key={index}>
                    <span  onClick={() => handleClick(item)}>{item}</span>
                </React.Fragment>
            ))}
        </div>
        {showModal && <CaseModal onClose={() => setShowModal(false)} cases={cases} />}

    </div>
    )
}