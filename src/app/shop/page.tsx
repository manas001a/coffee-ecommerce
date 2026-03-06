'use client';

import { useState, useEffect, useMemo } from 'react';
import { categories } from '@/data/products';
import { Product } from '@/data/products';
import ProductCard from '@/components/ProductCard/ProductCard';
import styles from './shop.module.css';

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch('/api/products');
        if (res.ok) {
          const data = await res.json();
          // Map MongoDB _id field and productId to our id field
          const mapped = data.map((p: Record<string, unknown>) => ({
            ...p,
            id: p.productId || p._id,
          }));
          setProducts(mapped);
        }
      } catch (err) {
        console.error('Failed to fetch from API, using local data:', err);
        // Fallback to local data
        const { products: localProducts } = await import('@/data/products');
        setProducts(localProducts);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    let filtered = activeCategory === 'all'
      ? products
      : products.filter((p) => p.category === activeCategory);

    switch (sortBy) {
      case 'price-low':
        return [...filtered].sort((a, b) => a.price - b.price);
      case 'price-high':
        return [...filtered].sort((a, b) => b.price - a.price);
      case 'rating':
        return [...filtered].sort((a, b) => b.rating - a.rating);
      case 'name':
        return [...filtered].sort((a, b) => a.name.localeCompare(b.name));
      default:
        return filtered;
    }
  }, [activeCategory, sortBy, products]);

  return (
    <div className={styles.shopPage}>
      <div className={styles.shopHeader}>
        <h1 className={styles.shopTitle}>Our Coffee Collection</h1>
        <p className={styles.shopDesc}>Explore our handpicked selection of the world&apos;s finest coffees</p>
      </div>

      <div className={styles.shopLayout}>
        <div className={styles.filters}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`${styles.filterBtn} ${activeCategory === cat.id ? styles.active : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>

        <div className={styles.sortBar}>
          <span className={styles.resultCount}>
            {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
          </span>
          <select
            className={styles.sortSelect}
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            id="sort-select"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
            <option value="name">Name A–Z</option>
          </select>
        </div>

        <div className={styles.productsGrid}>
          {loading ? (
            <div className={styles.noResults}>
              <div className={styles.noResultsIcon}>⏳</div>
              <p>Loading products...</p>
            </div>
          ) : filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className={styles.noResults}>
              <div className={styles.noResultsIcon}>🔍</div>
              <p>No products found in this category yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
