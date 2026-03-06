import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct extends Document {
  productId: string;
  name: string;
  description: string;
  shortDescription: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  roastLevel: string;
  origin: string;
  weight: string;
  rating: number;
  reviews: number;
  badge?: string;
  inStock: boolean;
  featured: boolean;
  flavorNotes: string[];
}

const ProductSchema = new Schema<IProduct>(
  {
    productId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    shortDescription: { type: String, required: true },
    price: { type: Number, required: true },
    originalPrice: { type: Number },
    image: { type: String, default: '/images/coffee-1.jpg' },
    category: { type: String, required: true, enum: ['beans', 'ground', 'pods', 'equipment', 'merch'] },
    roastLevel: { type: String, required: true, enum: ['light', 'medium', 'dark', 'espresso'] },
    origin: { type: String, required: true },
    weight: { type: String, default: '340g' },
    rating: { type: Number, default: 4.5 },
    reviews: { type: Number, default: 0 },
    badge: { type: String },
    inStock: { type: Boolean, default: true },
    featured: { type: Boolean, default: false },
    flavorNotes: { type: [String], default: [] },
  },
  { timestamps: true }
);

export default mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema);
