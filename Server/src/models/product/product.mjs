import { Schema, model } from "mongoose";

const productSchema = Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  description: {
    type: String,
    required: true,
  },
  mainImage: {
    type: String,
    required: true,
  },
  gallery: [
    {
      type: String,
    },
  ],
  category: {
    type: Schema.Types.ObjectId,
    ref: "category",
    required: true,
  },
  basePrice: {
    type: Number,
    required: true,
  },
  sellPrice: {
    type: Number,
    required: true,
  },
  Stock: {
    type: Number,
    required: true,
    min: 0,
    max: 255,
  },
  tags: [
    {
      type: String,
    },
  ],
  published: {
    type: Boolean,
    default: true,
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default model("product", productSchema);
