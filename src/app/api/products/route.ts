import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import Product from '@/models/Product';

export async function GET(request: Request) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const featured = searchParams.get('featured');
    const sort = searchParams.get('sort');

    // Build filter
    const filter: Record<string, unknown> = {};
    if (category && category !== 'all') filter.category = category;
    if (featured === 'true') filter.featured = true;

    // Build sort
    let sortOption: Record<string, 1 | -1> = {};
    switch (sort) {
      case 'price-low': sortOption = { price: 1 }; break;
      case 'price-high': sortOption = { price: -1 }; break;
      case 'rating': sortOption = { rating: -1 }; break;
      case 'name': sortOption = { name: 1 }; break;
      default: sortOption = { featured: -1 };
    }

    const products = await Product.find(filter).sort(sortOption).lean();

    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}
