'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import styles from './detail.module.css';

export default function ProductDetail() {
  const params = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [qty, setQty] = useState(1);
  const { addItem } = useCart();

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`/api/products/${params.id}`);
        if (res.ok) {
          const data = await res.json();
          setProduct({ ...data, id: data.productId || data._id });
        }
      } catch (err) {
        console.error('Failed to fetch from API, using local data:', err);
      }

      // Fallback to local data if API fails
      if (!product) {
        const { products } = await import('@/data/products');
        const found = products.find((p) => p.id === params.id) || null;
        setProduct(found);
      }
      setLoading(false);
    }
    fetchProduct();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);

  if (loading) {
    return (
      <div className={styles.detailPage}>
        <div className={styles.container} style={{ textAlign: 'center', paddingTop: '4rem' }}>
          <p>Loading product...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className={styles.detailPage}>
        <div className={styles.container}>
          <p>Product not found.</p>
          <Link href="/shop" className="btn btn-primary btn-sm">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const roastLabelMap: Record<string, string> = { light: 'Light Roast', medium: 'Medium Roast', dark: 'Dark Roast', espresso: 'Espresso Roast' };

  return (
    <div className={styles.detailPage}>
      <div className={styles.container}>
        <div className={styles.breadcrumb}>
          <Link href="/">Home</Link> / <Link href="/shop">Shop</Link> / <span>{product.name}</span>
        </div>

        <div className={styles.productLayout}>
          <div className={styles.imageSection}>
            {product.badge && (
              <div className={styles.badgePos}>
                <span className="badge badge-gold">{product.badge}</span>
              </div>
            )}
            <span className={styles.mainEmoji}>☕</span>
          </div>

          <div className={styles.infoSection}>
            <div className={styles.origin}>{product.origin}</div>
            <h1 className={styles.productName}>{product.name}</h1>

            <div className={styles.ratingRow}>
              <span className={styles.stars}>{'⭐'.repeat(Math.round(product.rating))}</span>
              <span className={styles.ratingText}>{product.rating} ({product.reviews} reviews)</span>
            </div>

            <div className={styles.priceRow}>
              <span className={styles.currentPrice}>₹{product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className={styles.oldPrice}>₹{product.originalPrice.toFixed(2)}</span>
              )}
            </div>

            <p className={styles.description}>{product.description}</p>

            <div className={styles.meta}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Roast Level</span>
                <span className={styles.metaValue}>{roastLabelMap[product.roastLevel]}</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Origin</span>
                <span className={styles.metaValue}>{product.origin}</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Weight</span>
                <span className={styles.metaValue}>{product.weight}</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Type</span>
                <span className={styles.metaValue}>{product.category === 'beans' ? 'Whole Beans' : 'Ground'}</span>
              </div>
            </div>

            <div className={styles.flavors}>
              {product.flavorNotes.map((n) => (
                <span key={n} className={styles.flavorTag}>{n}</span>
              ))}
            </div>

            <div className={styles.actions}>
              <div className={styles.qtyControl}>
                <button className={styles.qtyBtn} onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
                <span className={styles.qtyValue}>{qty}</span>
                <button className={styles.qtyBtn} onClick={() => setQty(qty + 1)}>+</button>
              </div>
              <button
                className={`btn btn-primary ${styles.addBtn}`}
                onClick={() => addItem(product, qty)}
              >
                Add to Cart — ₹{(product.price * qty).toFixed(2)}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
