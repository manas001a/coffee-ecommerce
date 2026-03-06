'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './admin.module.css';

interface Order {
  _id: string;
  orderNumber: string;
  customer: {
    firstName: string;
    lastName: string;
    email: string;
  };
  total: number;
  status: string;
  createdAt: string;
  items: Array<{
    name: string;
    quantity: number;
  }>;
}

export default function AdminPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchOrders() {
      try {
        const res = await fetch('/api/orders');
        if (res.ok) {
          const data = await res.json();
          setOrders(data);
        }
      } catch (err) {
        console.error('Failed to fetch orders:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchOrders();
  }, []);

  return (
    <div className={styles.adminPage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Admin Dashboard</h1>
          <p className={styles.subtitle}>Manage your orders and products</p>
        </div>

        <div className={styles.statsRow}>
          <div className={styles.statCard}>
            <div className={styles.statLabel}>Total Orders</div>
            <div className={styles.statValue}>{orders.length}</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statLabel}>Revenue</div>
            <div className={styles.statValue}>
              ₹{orders.reduce((acc, curr) => acc + curr.total, 0).toFixed(2)}
            </div>
          </div>
        </div>

        <div className={styles.ordersSection}>
          <h2 className={styles.sectionTitle}>Recent Orders</h2>
          {loading ? (
            <p>Loading orders...</p>
          ) : orders.length > 0 ? (
            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Order #</th>
                    <th>Customer</th>
                    <th>Items</th>
                    <th>Total</th>
                    <th>Status</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order._id}>
                      <td className={styles.orderNum}>{order.orderNumber}</td>
                      <td>
                        <div className={styles.customerName}>{order.customer.firstName} {order.customer.lastName}</div>
                        <div className={styles.customerEmail}>{order.customer.email}</div>
                      </td>
                      <td>
                        {order.items.map(item => `${item.quantity}x ${item.name}`).join(', ')}
                      </td>
                      <td className={styles.orderTotal}>₹{order.total.toFixed(2)}</td>
                      <td>
                        <span className={`${styles.statusBadge} ${styles[order.status]}`}>
                          {order.status}
                        </span>
                      </td>
                      <td className={styles.date}>{new Date(order.createdAt).toLocaleDateString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className={styles.noOrders}>
              <p>No orders found yet.</p>
              <Link href="/shop" className="btn btn-sm btn-primary">Go to Shop</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
