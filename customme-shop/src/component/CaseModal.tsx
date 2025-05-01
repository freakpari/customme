import { useEffect, useRef } from "react";
import styles from "../styles/CaseModal.module.scss";

type Props = {
  onClose: () => void;
  cases: { id: number; name: string; image: string }[];
};

export default function CaseModal({ onClose, cases }: Props) {
    const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);
  return (

    <div className={styles.backdrop}>
      <div className={styles.modal} ref={modalRef}>
        <div className={styles.caseList}>
          {cases.map((c) => (
            <div key={c.id} className={styles.caseItem}>
              <img src={c.image} alt={c.name} />
              <p>{c.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
