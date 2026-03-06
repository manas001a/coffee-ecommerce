import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import Order from '@/models/Order';

function generateOrderNumber() {
  const prefix = 'BH';
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `${prefix}-${timestamp}-${random}`;
}

export async function POST(request: Request) {
  try {
    await connectDB();

    const body = await request.json();

    const { customer, shipping, items, subtotal, shipping_cost, tax, total } = body;

    // Validate required fields
    if (!customer?.firstName || !customer?.lastName || !customer?.email) {
      return NextResponse.json({ error: 'Customer information is required' }, { status: 400 });
    }
    if (!shipping?.address || !shipping?.city || !shipping?.state || !shipping?.zip) {
      return NextResponse.json({ error: 'Shipping information is required' }, { status: 400 });
    }
    if (!items || items.length === 0) {
      return NextResponse.json({ error: 'Order must contain at least one item' }, { status: 400 });
    }

    const order = await Order.create({
      orderNumber: generateOrderNumber(),
      customer,
      shipping,
      items,
      subtotal,
      shipping_cost,
      tax,
      total,
      status: 'pending',
    });

    return NextResponse.json(
      { message: 'Order placed successfully', orderNumber: order.orderNumber, orderId: order._id },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating order:', error);
    return NextResponse.json({ error: 'Failed to create order' }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectDB();

    const orders = await Order.find({}).sort({ createdAt: -1 }).lean();

    return NextResponse.json(orders, { status: 200 });
  } catch (error) {
    console.error('Error fetching orders:', error);
    return NextResponse.json({ error: 'Failed to fetch orders' }, { status: 500 });
  }
}
