import styles from './about.module.css';

const values = [
  { icon: '🌱', title: 'Sustainability', desc: 'We work directly with farmers, ensuring fair wages and environmentally responsible farming practices.' },
  { icon: '🎯', title: 'Quality First', desc: 'Only the top 3% of specialty-grade beans pass our rigorous cupping tests to make it into your bag.' },
  { icon: '❤️', title: 'Community', desc: 'We reinvest 5% of our profits into coffee-growing communities through education and infrastructure.' },
  { icon: '🔬', title: 'Innovation', desc: 'Our roasting lab constantly experiments with profiles to unlock each bean\'s maximum flavor potential.' },
  { icon: '🤝', title: 'Transparency', desc: 'We share the full journey of every bean — from farm to cup — so you know exactly what you\'re drinking.' },
  { icon: '🏆', title: 'Award Winning', desc: 'Recognized by the Specialty Coffee Association for excellence in roasting three years running.' },
];

export default function AboutPage() {
  return (
    <div className={styles.aboutPage}>
      <section className={styles.heroSection}>
        <h1 className={styles.heroTitle}>Our Story</h1>
        <p className={styles.heroDesc}>
          From a small garage roaster to a beloved specialty coffee brand — we&apos;ve always believed that
          great coffee can change your day.
        </p>
      </section>

      <section className={styles.storySection}>
        <div className={styles.storyImage}>☕</div>
        <div className={styles.storyContent}>
          <h2>Born From Passion</h2>
          <p>
            It started in 2015, when our founder traveled to Ethiopia and tasted coffee straight from the source
            for the first time. That single cup changed everything — the bright acidity, the floral notes, the
            warmth of community around the brewing process.
          </p>
          <p>
            Today, Brew Haven partners with over 40 farms across 12 countries, bringing you the most exceptional
            coffees on earth. Every bag is roasted to order in our solar-powered facility, ensuring peak freshness
            and the smallest environmental footprint possible.
          </p>
        </div>
      </section>

      <section className={styles.valuesSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>What We Stand For</h2>
        </div>
        <div className={styles.valuesGrid}>
          {values.map((v) => (
            <div key={v.title} className={styles.valueCard}>
              <div className={styles.valueIcon}>{v.icon}</div>
              <h3 className={styles.valueTitle}>{v.title}</h3>
              <p className={styles.valueDesc}>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
