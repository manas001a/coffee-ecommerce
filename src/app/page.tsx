'use client';

import Link from 'next/link';
import { products, testimonials } from '@/data/products';
import ProductCard from '@/components/ProductCard/ProductCard';
import styles from './page.module.css';

const features = [
  { icon: '🌍', title: 'Single Origin', desc: 'Ethically sourced from the world\'s premier coffee-growing regions.' },
  { icon: '🔥', title: 'Fresh Roasted', desc: 'Small-batch roasted within 48 hours of your order.' },
  { icon: '🚚', title: 'Free Shipping', desc: 'Complimentary shipping on all orders over $50.' },
  { icon: '💎', title: 'Premium Quality', desc: 'Only the top 3% of specialty-grade beans make the cut.' },
];

export default function HomePage() {
  const featuredProducts = products.filter((p) => p.featured).slice(0, 4);

  return (
    <>
      {/* ====== HERO ====== */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <div className={styles.heroBadge}>✨ Freshly Roasted Weekly</div>
            <h1 className={styles.heroTitle}>
              Discover Your
              <span>Perfect Brew</span>
            </h1>
            <p className={styles.heroDesc}>
              Handpicked, single-origin coffees from the world&apos;s finest farms — roasted
              to perfection and delivered fresh to your doorstep.
            </p>
            <div className={styles.heroBtns}>
              <Link href="/shop" className="btn btn-primary">
                Shop Now →
              </Link>
              <Link href="/about" className="btn btn-secondary">
                Our Story
              </Link>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.coffeeCircle}>☕</div>
          </div>
        </div>
      </section>

      {/* ====== FEATURES ====== */}
      <section className={styles.features}>
        <div className={styles.featuresGrid}>
          {features.map((f) => (
            <div key={f.title} className={styles.featureCard}>
              <div className={styles.featureIcon}>{f.icon}</div>
              <h3 className={styles.featureTitle}>{f.title}</h3>
              <p className={styles.featureDesc}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ====== FEATURED PRODUCTS ====== */}
      <section className={styles.featured}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionSubtitle}>Our Collection</div>
          <h2 className={styles.sectionTitle}>Featured Coffees</h2>
          <p className={styles.sectionDesc}>
            Explore our carefully curated selection of the world&apos;s finest single-origin coffees.
          </p>
        </div>
        <div className={styles.productsGrid}>
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className={styles.viewAllWrap}>
          <Link href="/shop" className="btn btn-outline">
            View All Coffee →
          </Link>
        </div>
      </section>

      {/* ====== TESTIMONIALS ====== */}
      <section className={styles.testimonials}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionSubtitle}>What People Say</div>
          <h2 className={styles.sectionTitle}>Loved by Coffee Enthusiasts</h2>
          <p className={styles.sectionDesc}>
            Join thousands of happy customers who start their mornings with Brew Haven.
          </p>
        </div>
        <div className={styles.testimonialsGrid}>
          {testimonials.map((t) => (
            <div key={t.id} className={styles.testimonialCard}>
              <div className={styles.testimonialStars}>{'⭐'.repeat(t.rating)}</div>
              <p className={styles.testimonialText}>&ldquo;{t.text}&rdquo;</p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorAvatar}>{t.avatar}</div>
                <div>
                  <div className={styles.authorName}>{t.name}</div>
                  <div className={styles.authorRole}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ====== CTA / NEWSLETTER ====== */}
      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Join the Brew Haven Family</h2>
          <p className={styles.ctaDesc}>
            Subscribe for 15% off your first order plus exclusive access to new arrivals and special offers.
          </p>
          <form className={styles.ctaForm} onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className={styles.ctaInput}
              id="newsletter-email"
            />
            <button type="submit" className="btn btn-primary">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
