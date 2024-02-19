import { productTypes } from "@/components/offCanvas/cart/ProductCart.types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

type cartTypes = {
  products: productTypes["product"][];
  total: number;
  shipping: number;
};

const initialState: cartTypes = {
  products: [],
  total: 0,
  shipping: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<productTypes["product"]>) => {
      let product: productTypes["product"] | undefined = state.products.find(
        (pro: productTypes["product"] | undefined) =>
          pro?.id === action.payload.id
      );
      if (product && product.quantity && action.payload.quantity) {
        product.quantity += action.payload.quantity;
        state.total += action.payload.quantity * action.payload.price;
      } else {
        state.products = [
          ...state.products,
          { ...action.payload, quantity: action.payload.quantity || 1 },
        ];
        state.total += action.payload.price;
      }
      toast(`${action.payload.name} added successfully`, { type: "success" });
    },

    removeProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        (pro: productTypes["product"]) => pro.id !== action.payload
      );
      state.total = state.products.reduce(
        (total, product) => total + (product.quantity || 1) * product.price,
        0
      );
    },

    increment: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const product: productTypes["product"] | undefined = state.products.find(
        (pro) => pro.id === action.payload.id
      );

      if (
        product &&
        typeof product.quantity === "number" &&
        typeof action.payload.quantity === "number"
      ) {
        product.quantity += action.payload.quantity;

        // Recalculate the total
        state.total = state.products.reduce(
          (total, product) => total + (product.quantity || 1) * product.price,
          0
        );
      }
    },

    decrement: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      let product: productTypes["product"] | undefined = state.products.find(
        (pro) => pro.id === action.payload.id
      );
      if (
        product &&
        typeof product.quantity == "number" &&
        product.quantity > 1
      ) {
        product.quantity -= action.payload.quantity;
        // Recalculate the total
        state.total = state.products.reduce(
          (total, product) => total + (product.quantity || 1) * product.price,
          0
        );
      }
    },

    updateShipping: (state, action: PayloadAction<number>) => {
      state.shipping = action.payload;
      toast("shipping updated successfully", { type: "success" });
    },
  },
});

export const {
  addProduct,
  removeProduct,
  increment,
  decrement,
  updateShipping,
} = cartSlice.actions;
export default cartSlice.reducer;
