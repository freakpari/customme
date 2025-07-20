import React from 'react';
import styles from '../styles/SideModal.module.scss';

interface SidebarModalProps {
    isOpen: boolean;
    onClose: () => void;
}
const shirt =[
    "./wshirt.svg"
];

const SidebarModal: React.FC<SidebarModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.sidebar} onClick={(e) => e.stopPropagation()}>
                <div className={styles.header}>
                    <span>پوشاک</span>
                    <button onClick={onClose} className={styles.closeBtn}>×</button>
                </div>
                <div className={styles.section}>
                    <h4>تیشرت زنانه</h4>
                    <div className={styles.images}>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <img key={index} src={shirt[0]} alt={`shirt-${index}`} />
                        ))}
                    </div>
                </div>

                <div className={styles.section}>
                    <h4>تیشرت مردانه</h4>
                    <div className={styles.images}>
                        <div className={styles.images}>
                            {Array.from({ length: 5}).map((_, index) => (
                                <img key={index} src={shirt[0]} alt={`shirt-${index}`} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className={styles.section}>
                    <h4>تیشرت بچگانه</h4>
                    <div className={styles.images}>
                        <div className={styles.images}>
                            {Array.from({ length: 5 }).map((_, index) => (
                                <img key={index} src={shirt[0]} alt={`shirt-${index}`} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SidebarModal;
