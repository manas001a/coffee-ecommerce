'use client';

import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import styles from './Cart.module.css';

export default function Cart() {
  const { state, removeItem, updateQuantity, closeCart, totalItems, totalPrice } = useCart();

  if (!state.isOpen) return null;

  return (
    <>
      <div className={styles.cartOverlay} onClick={closeCart} />
      <div className={styles.cartPanel}>
        <div className={styles.cartHeader}>
          <div>
            <h2 className={styles.cartTitle}>Your Cart</h2>
            <span className={styles.cartCount}>{totalItems} item{totalItems !== 1 ? 's' : ''}</span>
          </div>
          <button className={styles.closeBtn} onClick={closeCart} aria-label="Close cart">✕</button>
        </div>

        <div className={styles.cartItems}>
          {state.items.length === 0 ? (
            <div className={styles.emptyCart}>
              <span className={styles.emptyIcon}>🛒</span>
              <span className={styles.emptyText}>Your cart is empty</span>
              <Link href="/shop" className="btn btn-primary btn-sm" onClick={closeCart}>
                Start Shopping
              </Link>
            </div>
          ) : (
            state.items.map((item) => (
              <div key={item.product.id} className={styles.cartItem}>
                <div className={styles.itemImage}>☕</div>
                <div className={styles.itemDetails}>
                  <div className={styles.itemName}>{item.product.name}</div>
                  <div className={styles.itemMeta}>{item.product.weight} · {item.product.origin}</div>
                  <div className={styles.itemBottom}>
                    <div className={styles.quantityControl}>
                      <button
                        className={styles.qtyBtn}
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      >
                        −
                      </button>
                      <span className={styles.qtyValue}>{item.quantity}</span>
                      <button
                        className={styles.qtyBtn}
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                    <span className={styles.itemPrice}>
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                  <button
                    className={styles.removeBtn}
                    onClick={() => removeItem(item.product.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {state.items.length > 0 && (
          <div className={styles.cartFooter}>
            <div className={styles.subtotalRow}>
              <span>Subtotal</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className={styles.subtotalRow}>
              <span>Shipping</span>
              <span>{totalPrice > 50 ? 'Free' : '$5.99'}</span>
            </div>
            <div className={styles.totalRow}>
              <span>Total</span>
              <span>${(totalPrice > 50 ? totalPrice : totalPrice + 5.99).toFixed(2)}</span>
            </div>
            <Link href="/checkout" className={`btn btn-primary ${styles.checkoutBtn}`} onClick={closeCart}>
              Proceed to Checkout
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
