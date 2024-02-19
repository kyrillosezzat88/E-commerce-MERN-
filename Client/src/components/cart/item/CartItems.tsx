"use client";
import "./CartItem.scss";
import Image from "next/image";
import Quantity from "../quanitiy/Quantity";
import { useAppDispatch, useAppSelector } from "@/store";
import Link from "next/link";
import OrderSummary from "../summary/OrderSummary";
import { removeProduct } from "@/store/slices/CartSlice";

const CartItems = () => {
  const { products } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  return (
    <div className="cart-content my-10 flex flex-wrap md:flex-nowrap gap-16">
      {products.length ? (
        <>
          <div className="w-full md:w-3/5">
            <div className="cart-content-title py-3 flex justify-between items-center border-b border-gray-200">
              <h1 className="text-4xl font-bold capitalize">your cart</h1>
              <span className="text-2xl">{products.length} items</span>
            </div>
            <div className="cart-content-items my-6">
              {products.map(
                ({ id, image, name, price, currency, quantity }) => (
                  <div className="cartItem" key={id}>
                    <div className="cartItem-left">
                      <Image
                        src={image}
                        alt="product"
                        width={120}
                        height={120}
                        className=" object-contain h-36"
                      />
                      <div className="cartItem-left-content">
                        <Link
                          href={`/product/${id}`}
                          className="cartItem-left-content-title"
                        >
                          {name}
                        </Link>
                        <div className="cartItem-left-content-options">
                          <span>Color: red</span>
                          <span>Size: XL</span>
                        </div>
                        <Quantity id={id} quantity={quantity} />
                      </div>
                    </div>
                    <div className="cartItem-right">
                      <Image
                        src="/icons/close.svg"
                        alt="delete"
                        width={24}
                        height={24}
                        onClick={() => dispatch(removeProduct(id))}
                      />
                      <span className="cartItem-right-price">
                        {currency}
                        {price * (quantity || 1)}
                      </span>
                    </div>
                  </div>
                )
              )}
            </div>
            <div className="cart-content-coupon w-full flex justify-between gap-4 py-6">
              <input
                className="input-underline w-full"
                type="text"
                placeholder="Coupon code"
              />
              <button className="btn-outline">Apply</button>
            </div>
          </div>
          <div className="w-full md:w-2/5">
            <OrderSummary pageName="checkout" btnTitle="Proceed To Checkout" />
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center w-full">
          <Image
            src="/images/empty-cart.jpg"
            width={500}
            height={500}
            alt="empty-cart"
          />
          <h2 className="text-4xl my-4">Your Cart is Empty</h2>
          <Link href="/shop" className="btn-primary">
            Shop Now
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartItems;
