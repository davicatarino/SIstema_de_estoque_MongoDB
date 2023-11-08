import { Int32, ObjectId } from 'mongodb';
import mongoose from 'mongoose';
const { Schema } = mongoose;
const productSchema = new Schema(
  {
    name: {
      type: String,
      required: false,
    },
    quantity: {
      type: String,
      required: false,
    },
    category: {
      type: String,
      required: false,
    },
  },
  { timestamps: true },
);
export default mongoose.models.product ||
  mongoose.model('product', productSchema);
