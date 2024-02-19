import { Schema, model } from "mongoose";

const OrderSchema = Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  orderID: {
    type: String,
    unique: true,
    required: true,
  },
  orderItems: [
    {
      type: Schema.Types.ObjectId,
      ref: "orderItem",
      required: true,
    },
  ],
  shippingAddress: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: "pending",
  },
  shippingCost: {
    type: Number,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  shippedDate: {
    type: Date,
    default: "",
  },
  dilveredDate: {
    type: Date,
    default: "",
  },
  notes: {
    type: String,
    default: "",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default model("order", OrderSchema);
