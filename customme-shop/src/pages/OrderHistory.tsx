import  { useState } from "react";
import styles from "../styles/OrderHistory.module.scss";
import Navbar from "../component/Navbar";
import MainMenu from "../component/MainMenu";
import Profile from "../component/Profile";
import Footer from "../component/Footer";

const orders = [
    {
    id: 1,
    orderCode: "354534521",
    date: "۳ شهریور ۱۴۰۴",
    amount: "۵۴۵,۰۰۰ تومان",
    discount: "۵۴۵,۰۰۰ تومان",
    status: "در حال پردازش",
    images: [
        "phone.svg",
        "phone.svg",
        "phone.svg",
        "phone.svg",
        "phone.svg",
        "moreph.svg",

    ],
},

];

export default function OrderHistory  () {
    const [activeTab, setActiveTab] = useState("جاری");
    const tabs = ["جاری ۲", " تحویل شده ۲۶", "مرجوع شده ۴", "لغو شده ۴"];

    return (
    <>
        <Navbar />
        <MainMenu />
        <div className={styles.maincontent}>
        <Profile />
        <div className={styles.orderhistory}>
            <h2>تاریخچه سفارشات</h2>
            <div className={styles.tabs}>
            {tabs.map((tab) => (
                <span
                key={tab}
                className={activeTab === tab ? styles.active : ""}
                onClick={() => setActiveTab(tab)}
                >
                {tab}
                </span>
            ))}
            </div>
            <div className={styles.orderslist}>
                <p className={styles.loadtext}>
                    <img src="load.svg" />
                    در حال پردازش
                </p>
            {orders.map((order) => (
                <div key={order.id} className={styles.orderitem}>
                <div className={styles.orderinfo}>
                    <span>{order.date}</span>
                    <span>کد سفارش: {order.orderCode}</span>
                    <span>مبلغ: {order.amount}</span>
                    <span>تخفیف: {order.discount}</span>
                </div>
                <div className={styles.orderimages}>
                    {order.images.map((img, index) => (
                    <img key={index} src={img} alt="product" />
                    ))}
                </div>
                <p className={styles.vieworder}>
                    <img src="/bill.svg" />
                    مشاهده سفارش</p>
                </div>
            ))}
            </div>
            <div className={styles.orderslist}>
                <p className={styles.loadtext}>
                    <img src="load.svg" />
                    در حال پردازش
                </p>
            {orders.map((order) => (
                <div key={order.id} className={styles.orderitem}>
                <div className={styles.orderinfo}>
                    <span>{order.date}</span>
                    <span>کد سفارش: {order.orderCode}</span>
                    <span>مبلغ: {order.amount}</span>
                    <span>تخفیف: {order.discount}</span>
                </div>
                <div className={styles.orderimages}>
                    {order.images.map((img, index) => (
                    <img key={index} src={img} alt="product" />
                    ))}
                </div>
                <p className={styles.vieworder}>
                    <img src="/bill.svg" />
                    مشاهده سفارش</p>
                </div>
                
            ))}
            </div>
            </div>
        </div>        
        <Footer />
    </>
  
    );
};