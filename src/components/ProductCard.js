'use client';
import { useState } from 'react';
import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={product.image} alt={product.title} className={styles.image} />
        {product.id % 5 === 0 && <div className={styles.newProduct}>NEW PRODUCT</div>}
      </div>
      <div className={styles.info}>
        <div className={styles.titleRow}>
          <h3 className={styles.title}>{product.title}</h3>
          <button 
            className={`${styles.heartBtn} ${isFavorite ? styles.favorite : ''}`} 
            onClick={() => setIsFavorite(!isFavorite)}
          >
            {isFavorite ? '❤️' : '🤍'}
          </button>
        </div>
        <p className={styles.pricing}>
          <span>Sign in</span> or Create an account to see pricing
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
