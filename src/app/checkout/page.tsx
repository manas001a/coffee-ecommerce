'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import styles from './checkout.module.css';

export default function CheckoutPage() {
  const { state, totalPrice, clearCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderPlaced(true);
    clearCart();
  };

  if (state.items.length === 0 && !orderPlaced) {
    return (
      <div className={styles.checkoutPage}>
        <div className={styles.container}>
          <div className={styles.emptyCheckout}>
            <div className={styles.emptyIcon}>🛒</div>
            <p className={styles.emptyText}>Your cart is empty. Add some coffee first!</p>
            <Link href="/shop" className="btn btn-primary">Browse Coffee</Link>
          </div>
        </div>
      </div>
    );
  }

  const shipping = totalPrice > 50 ? 0 : 5.99;
  const tax = totalPrice * 0.08;
  const total = totalPrice + shipping + tax;

  return (
    <div className={styles.checkoutPage}>
      <div className={styles.container}>
        <h1 className={styles.checkoutTitle}>Checkout</h1>

        <div className={styles.checkoutLayout}>
          <form className={styles.formSection} onSubmit={handleSubmit}>
            <h2 className={styles.formSectionTitle}>📦 Shipping Information</h2>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="first-name">First Name</label>
                <input className={styles.formInput} type="text" id="first-name" placeholder="John" required />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="last-name">Last Name</label>
                <input className={styles.formInput} type="text" id="last-name" placeholder="Doe" required />
              </div>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="checkout-email">Email</label>
              <input className={styles.formInput} type="email" id="checkout-email" placeholder="john@example.com" required />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="address">Address</label>
              <input className={styles.formInput} type="text" id="address" placeholder="123 Coffee Lane" required />
            </div>
            <div className={styles.formRow3}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="city">City</label>
                <input className={styles.formInput} type="text" id="city" placeholder="Portland" required />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="state">State</label>
                <input className={styles.formInput} type="text" id="state" placeholder="OR" required />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="zip">ZIP Code</label>
                <input className={styles.formInput} type="text" id="zip" placeholder="97201" required />
              </div>
            </div>

            <h2 className={styles.formSectionTitle} style={{ marginTop: '2rem' }}>💳 Payment Details</h2>
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="card-number">Card Number</label>
              <input className={styles.formInput} type="text" id="card-number" placeholder="1234 5678 9012 3456" required />
            </div>
            <div className={styles.formRow3}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="exp-month">Month</label>
                <input className={styles.formInput} type="text" id="exp-month" placeholder="MM" required />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="exp-year">Year</label>
                <input className={styles.formInput} type="text" id="exp-year" placeholder="YY" required />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="cvv">CVV</label>
                <input className={styles.formInput} type="text" id="cvv" placeholder="123" required />
              </div>
            </div>

            <button type="submit" className={`btn btn-primary ${styles.placeOrderBtn}`}>
              Place Order — ${total.toFixed(2)}
            </button>
            <div className={styles.secureNote}>🔒 Your payment is secure and encrypted</div>
          </form>

          <div className={styles.summarySection}>
            <h2 className={styles.summaryTitle}>Order Summary</h2>
            {state.items.map((item) => (
              <div key={item.product.id} className={styles.summaryItem}>
                <div className={styles.summaryItemInfo}>
                  <span className={styles.summaryItemEmoji}>☕</span>
                  <div>
                    <div className={styles.summaryItemName}>{item.product.name}</div>
                    <div className={styles.summaryItemMeta}>Qty: {item.quantity} · {item.product.weight}</div>
                  </div>
                </div>
                <span className={styles.summaryItemPrice}>${(item.product.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div style={{ marginTop: '1rem' }}>
              <div className={styles.summaryRow}><span>Subtotal</span><span>${totalPrice.toFixed(2)}</span></div>
              <div className={styles.summaryRow}><span>Shipping</span><span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span></div>
              <div className={styles.summaryRow}><span>Tax</span><span>${tax.toFixed(2)}</span></div>
              <div className={styles.summaryTotal}><span>Total</span><span>${total.toFixed(2)}</span></div>
            </div>
          </div>
        </div>
      </div>

      {orderPlaced && (
        <div className={styles.successOverlay}>
          <div className={styles.successModal}>
            <div className={styles.successIcon}>🎉</div>
            <h2 className={styles.successTitle}>Order Placed!</h2>
            <p className={styles.successText}>
              Thank you for your order! Your freshly roasted coffee is being prepared and will be shipped within 24 hours.
            </p>
            <Link href="/" className="btn btn-primary">Continue Shopping</Link>
          </div>
        </div>
      )}
    </div>
  );
}
