import styles from "../styles/OtherProduct.module.scss";
import {ProductCard}  from "../component/ProductCard";
import  FilterSidebar  from "../component/FilterSidebar";
import Navbar from "../component/Navbar";
import MainMenu from "../component/MainMenu";
import { useState } from "react";

const products = [
    { id: 1, name: "تیشرت زنانه کد 1346", price: "200,000 تومان", image: "/redtshirt.svg" },
    { id: 2, name: "تیشرت زنانه کد 1346", price: "200,000 تومان", image: "/redtshirt.svg" },
    { id: 3, name: "تیشرت زنانه کد 1346", price: "200,000 تومان", image: "/tshirtblack.svg" },
    { id: 4, name: "تیشرت زنانه کد 1346", price: "200,000 تومان", image: "/tshirtblack.svg" },
    { id: 5, name: "تیشرت زنانه کد 1346", price: "200,000 تومان", image: "/tshirtwhite.svg" },
    { id: 6, name: "تیشرت زنانه کد 1346", price: "200,000 تومان", image: "/tshirtwhite.svg" },
    { id: 7, name: "تیشرت زنانه کد 1346", price: "200,000 تومان", image: "/tshirtwhite.svg" },
    { id: 8, name: "تیشرت زنانه کد 1346", price: "200,000 تومان", image: "/tshirtwhite.svg" },
];
const categories = [
    "پربازدیدترین",
    "جدیدترین",
    "پرفروش ترین",
    "گران ترین",
    "ارزان ترین",
  ];
export default function OtherProduct ()  {
const [selected, setSelected] = useState(categories[0]); 

return (
    <>
    <Navbar />
    <MainMenu />
    <div className={styles.container}>
    <FilterSidebar />
    <div className={styles.content}>
    <ul className={styles.list}>
      {categories.map((category) => (
        <li key={category} onClick={() => setSelected(category)}
        style={{ color: selected === category ? "#A72F3B" : "#242424" }} >
        {category} {selected === category ? "" : ""}
        </li>
      ))}
    </ul>
        <div className={styles.grid}>
        {products.map((product) => (
            <ProductCard key={product.id} product={product} />
        ))}
        </div>
        <div className={styles.pagination}>
        <button>«</button>
        <button className={styles.active}>1</button>
        <button>2</button>
        <button>3</button>
        <button>»</button>
    </div>
    </div>
    </div>
    </>
);
};
