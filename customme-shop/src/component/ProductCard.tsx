import React from "react";
import styles from "../styles/OtherProduct.module.scss";

interface ProductProps {
product: {
    id: number;
    name: string;
    price: string;
    image: string;
};
}

export const ProductCard: React.FC<ProductProps> = ({ product }) => {
return (
    <div className={styles.card}>
        <img src={product.image} alt={product.name} className={styles.image} />
        <div className={styles.description} >
        <h3 className={styles.name}>{product.name}</h3>
        <img src="/Like.svg" />
        </div>

        <p>جنس نخ،رنگ بندی متنوع،قابل طراحی</p>
        <p className={styles.price}>{product.price}</p>
    </div>
);
};
