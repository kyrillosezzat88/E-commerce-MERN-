"use client";

import Image from "next/image";
import { OrderSummary } from "..";

const Order = () => {
  return (
    <>
      <h2 className="text-4xl font-JostReg mb-6">Your Order</h2>
      <div className="checkout-content-order-products p-6 bg-gray-50 border border-gray-200 rounded">
        <h2 className="text-2xl mb-6">Products</h2>
        <div className="flex gap-8 mb-6 border-b py-6">
          <Image
            src="/images/product1.png"
            width={80}
            height={80}
            alt="product"
          />
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-JostSemiBold">Ball Crew Shirt - x1</h3>
            <p>Color: Navy</p>
            <p>Size: S</p>
          </div>
          <span>24$</span>
        </div>
        <div className="flex gap-8 mb-6">
          <Image
            src="/images/product1.png"
            width={80}
            height={80}
            alt="product"
          />
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-JostSemiBold">Ball Crew Shirt - x1</h3>
            <p>Color: Navy</p>
            <p>Size: S</p>
          </div>
          <span>24$</span>
        </div>
        <OrderSummary
          pageName="thankyou"
          btnTitle="Place Order"
          titleClasses="hidden"
        />
      </div>
    </>
  );
};

export default Order;
