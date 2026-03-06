'use client';

import { useState } from 'react';
import styles from './contact.module.css';

const contactInfo = [
  { icon: '📍', title: 'Visit Us', text: '123 Roastery Lane, Portland, OR 97201' },
  { icon: '📧', title: 'Email Us', text: 'hello@brewhaven.com' },
  { icon: '📞', title: 'Call Us', text: '+1 (503) 555-0123' },
  { icon: '🕐', title: 'Hours', text: 'Mon-Fri: 7am-7pm\nSat-Sun: 8am-5pm' },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className={styles.contactPage}>
      <div className={styles.contactHeader}>
        <h1 className={styles.contactTitle}>Get in Touch</h1>
        <p className={styles.contactDesc}>We&apos;d love to hear from you. Drop us a line anytime!</p>
      </div>

      <div className={styles.contactLayout}>
        <div className={styles.infoSection}>
          {contactInfo.map((info) => (
            <div key={info.title} className={styles.infoCard}>
              <span className={styles.infoIcon}>{info.icon}</span>
              <div>
                <div className={styles.infoTitle}>{info.title}</div>
                <div className={styles.infoText}>{info.text}</div>
              </div>
            </div>
          ))}
        </div>

        <form className={styles.formSection} onSubmit={handleSubmit}>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="contact-name">Full Name</label>
              <input className={styles.formInput} type="text" id="contact-name" placeholder="John Doe" required />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="contact-email">Email</label>
              <input className={styles.formInput} type="email" id="contact-email" placeholder="john@example.com" required />
            </div>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel} htmlFor="contact-subject">Subject</label>
            <input className={styles.formInput} type="text" id="contact-subject" placeholder="How can we help?" required />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel} htmlFor="contact-message">Message</label>
            <textarea className={styles.formTextarea} id="contact-message" placeholder="Tell us more..." required />
          </div>
          <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
            {submitted ? '✓ Sent!' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
}
