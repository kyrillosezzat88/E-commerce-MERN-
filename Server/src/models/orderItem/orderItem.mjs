import { Schema, model } from "mongoose";

const orderItemSchema = Schema({
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "product",
    required: true,
  },
});

export default model("orderItem", orderItemSchema);
