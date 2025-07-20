import React from 'react';
import styles from '../styles/Sidebar.module.scss';

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

const Sidebar: React.FC<Props> = ({ isOpen, onClose }) => {
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
                                >
                                    <span>{item}</span>
                                    <span className={styles.arrow}>‹</span>
                                </div>

                            ))}
                        </div>
                    </div>
                    <div className={styles.backdrop} onClick={onClose} />
                </div>
            )}
        </>
    );
};

export default Sidebar;
