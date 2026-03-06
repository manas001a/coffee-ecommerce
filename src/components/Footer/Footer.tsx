import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        <div className={styles.brand}>
          <div className={styles.brandLogo}>
            <span>☕</span> Brew Haven
          </div>
          <p className={styles.brandDesc}>
            Crafting the perfect cup since 2015. We source the finest beans from
            around the world and roast them to perfection.
          </p>
          <div className={styles.social}>
            <a href="#" className={styles.socialLink} aria-label="Instagram">📷</a>
            <a href="#" className={styles.socialLink} aria-label="Twitter">🐦</a>
            <a href="#" className={styles.socialLink} aria-label="Facebook">📘</a>
          </div>
        </div>

        <div className={styles.column}>
          <h4>Shop</h4>
          <Link href="/shop">All Coffee</Link>
          <Link href="/shop">Whole Beans</Link>
          <Link href="/shop">Ground Coffee</Link>
          <Link href="/shop">Coffee Pods</Link>
          <Link href="/shop">Equipment</Link>
        </div>

        <div className={styles.column}>
          <h4>Company</h4>
          <Link href="/about">About Us</Link>
          <Link href="/about">Our Story</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/admin">Admin Dashboard</Link>
          <a href="#">Careers</a>
          <a href="#">Blog</a>
        </div>

        <div className={styles.column}>
          <h4>Support</h4>
          <a href="#">Help Center</a>
          <a href="#">Shipping Info</a>
          <a href="#">Returns</a>
          <a href="#">Gift Cards</a>
          <a href="#">Wholesale</a>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className={styles.bottomContent}>
          <span>© 2026 Brew Haven. All rights reserved.</span>
          <div className={styles.payments}>
            <span>💳</span>
            <span>🏦</span>
            <span>📱</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
