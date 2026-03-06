'use client';

import Link from 'next/link';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  product: Product;
}

const roastLevels = { light: 1, medium: 2, dark: 3, espresso: 4 };

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  const roastValue = roastLevels[product.roastLevel];

  return (
    <div className={styles.card}>
      <Link href={`/shop/${product.id}`}>
        <div className={styles.imageWrap}>
          {product.badge && (
            <div className={styles.badgeWrap}>
              <span className="badge badge-gold">{product.badge}</span>
            </div>
          )}
          <span className={styles.coffeeEmoji}>☕</span>
        </div>
      </Link>

      <button
        className={styles.quickAdd}
        onClick={(e) => {
          e.stopPropagation();
          addItem(product);
        }}
        aria-label={`Add ${product.name} to cart`}
      >
        +
      </button>

      <div className={styles.body}>
        <div className={styles.origin}>{product.origin}</div>
        <Link href={`/shop/${product.id}`}>
          <h3 className={styles.name}>{product.name}</h3>
        </Link>
        <p className={styles.description}>{product.shortDescription}</p>

        <div className={styles.flavorNotes}>
          {product.flavorNotes.map((note) => (
            <span key={note} className={styles.note}>{note}</span>
          ))}
        </div>

        <div className={styles.footer}>
          <div className={styles.priceWrap}>
            <span className={styles.price}>₹{product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className={styles.originalPrice}>₹{product.originalPrice.toFixed(2)}</span>
            )}
          </div>
          <div className={styles.rating}>
            ⭐ {product.rating}
            <span className={styles.ratingCount}>({product.reviews})</span>
          </div>
        </div>
      </div>
    </div>
  );
}
