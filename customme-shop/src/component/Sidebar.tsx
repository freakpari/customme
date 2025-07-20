import React from 'react';
import styles from '../styles/Sidebar.module.scss';
import SideModal from './SideModal';
import {useState} from "react";

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

const Sidebar: React.FC<Props> = ({ isOpen, onClose }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            {isOpen && (
                <div className={styles.overlay}>
                    <div className={styles.sidebar}>
                        <div className={styles.menuItems}>
                            {[
                                'پوشاک',
                                'لوازم خانه',
                                'قاب موبایل',
                                'اکسسوری',
                                'مدرسه و اداره',
                                 'کارت و پوستر',
                                'جشن و مهمانی',
                                'همراه با کاستومی',
                                'خدمات مشتریان',
                                'راهنمای خرید'
                            ].map((item, i) => (
                                <div key={i}
                                    className={`${styles.item} ${item === 'جشن و مهمانی' ? styles.extraMargin : ''}`}
                                     onClick={() => {
                                         if (item === 'پوشاک') {
                                             setIsModalOpen(true);
                                         }
                                     }}
                                >

                                    <span>{item}</span>
                                    <span className={styles.arrow}>‹</span>
                                </div>

                            ))}
                        </div>
                    </div>
                    <div className={styles.backdrop} onClick={onClose} />
                    {isModalOpen && (
                        <SideModal isOpen={true} onClose={() => setIsModalOpen(false)} />
                    )}
                </div>
            )}
        </>
    );
};

export default Sidebar;
