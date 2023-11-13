// src/models/brand.model.ts
import mongoose, { Document, Schema } from 'mongoose';

export interface IBrand extends Document {
  brandName: string;
  brandUrl: string;
}

const brandSchema = new Schema({
  brandName: String,
  brandUrl: String,
});

const BrandModel = mongoose.model<IBrand>('Brand', brandSchema);

export default BrandModel;
