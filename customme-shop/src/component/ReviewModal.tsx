import { useState } from 'react';
import styles from "../styles/ReviewModal.module.scss";

interface Props {
  onClose: () => void;
  onSubmit: (review: any) => void;
}

export default function ReviewModal({ onClose, onSubmit }: Props) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [pros, setPros] = useState<string[]>([]);
  const [cons, setCons] = useState<string[]>([]);
  const [title, setTitle] = useState('');

  const handleSubmit = () => {
    if (!comment) return alert(' فیلدارو پر کن');
    onSubmit({
      id: Date.now(),
      name: "کاربر جدید",
      user: "خریدار",
      date: new Date().toLocaleDateString('fa-IR'),
      rating,
      comment,
      pros,
      cons,
    });
    onClose();
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <img src="/close1.svg" className={styles.closeButton} onClick={onClose} />
        <h3 className={styles.header}>نظر خود را با ما در میان بگذارید</h3>
        <p style={{color:"#898989"}}>در مورد تیشرت ساده سفید</p>
        <div className={styles.stars}>
        <p style={{color:"#434343",fontSize:"14px",marginLeft:"10px"}}>امتیاز دهید</p>

          {[1,2,3,4,5].map(i => (
            <span key={i} onClick={() => setRating(i)}>
              {i <= rating ? '★' : '☆'}
            </span>
          ))}
        </div>
        <label >عنوان نظر </label>
        <input  value={title} onChange={e => setTitle(e.target.value)} />
        <label >نکات مثبت</label>
        <input  onKeyDown={e => {
          if (e.key === 'Enter') {
            setPros([...pros, e.currentTarget.value]);
            e.currentTarget.value = '';
          }
        }} />
        <label >نکات منفی</label>
        <input  onKeyDown={e => {
          if (e.key === 'Enter') {
            setCons([...cons, e.currentTarget.value]);
            e.currentTarget.value = '';
          }
        }} />
        <label>
            متن نظر *

        </label>
        <textarea placeholder='نظر خود را وارد کنید' value={comment} onChange={e => setComment(e.target.value)} />
        <button className={styles.submitButton} onClick={handleSubmit}>ثبت دیدگاه</button>
      </div>
    </div>
  );
}
