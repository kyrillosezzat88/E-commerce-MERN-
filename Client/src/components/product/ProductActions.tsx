"use client";
import Image from "next/image";
import { useState } from "react";
import { productActionsTypes } from "./product.types";
import { useAppDispatch } from "@/store";
import { addProduct } from "@/store/slices/CartSlice";

const ProductActions = ({ max_quantity, product }: productActionsTypes) => {
  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState<number>(1);
  const increment = () => {
    if (max_quantity > quantity) {
      setQuantity((prev) => prev + 1);
    }
  };
  const decrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };
  const addPro = () => {
    dispatch(addProduct({ ...product, quantity }));
  };
  return (
    <>
      <div className="productDetails-content-details-options">
        <div>
          <h3 className="mb-2">Color: Red</h3>
          <div className="productDetails-content-details-options-colors">
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="my-3">
          <h3 className=" mb-2">Size: XL</h3>
          <div className="productDetails-content-details-options-size">
            <span className="active">M</span>
            <span>L</span>
            <span>XL</span>
            <span>XXL</span>
          </div>
        </div>
      </div>
      <div className="productDetails-content-details-actions">
        <div className="productDetails-content-details-actions-quantity">
          <div className="flex justify-center items-center">
            <Image
              src="/icons/minus.svg"
              alt="minus"
              width={24}
              height={24}
              className=" cursor-pointer"
              onClick={decrement}
            />
          </div>
          <span className="border-r border-l border-gray-500">{quantity}</span>
          <div className="flex justify-center items-center">
            <Image
              src="/icons/plus.svg"
              alt="plus"
              width={24}
              height={24}
              className=" cursor-pointer"
              onClick={increment}
            />
          </div>
        </div>
        <button className="btn-primary w-full" onClick={addPro}>
          Add to cart
        </button>
        <button className="btn-secondary w-full">buy now</button>
        <button>
          <Image
            src="/icons/heart.svg"
            alt="wishlist"
            width={120}
            height={120}
          />
        </button>
      </div>
    </>
  );
};

export default ProductActions;
