"use client";
import "./OrderSummary.scss";
import { useAppDispatch, useAppSelector } from "@/store";
import { updateShipping } from "@/store/slices/CartSlice";
import Link from "next/link";
import { useState } from "react";
import { summaryPropsTypes } from "./OrderSummary.types";

const OrderSummary = ({
  titleClasses: titleClasess,
  btnTitle,
  pageName,
}: summaryPropsTypes) => {
  const { total, shipping } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const [selectedShipping, setSelectedShipping] = useState<number>(0);
  const [selectedPayment, setSelectedPayment] = useState<string>("cash");

  const handleShipping = (cost: number) => {
    dispatch(updateShipping(cost));
    setSelectedShipping(cost);
  };

  const handlePayment = (val: string) => {
    console.log({ payment: val });
    setSelectedPayment(val);
  };

  const shippingOptions = [
    { id: "home", label: "Delivery to Home", cost: 40 },
    { id: "pickup", label: "Pick up from store", cost: 0 },
  ];

  const paymentMethods = [
    { id: 1, value: "bank", label: "Direct bank transfer" },
    { id: 2, value: "cash", label: "Cash on delivery" },
    { id: 3, value: "card", label: "Credit Card (Stripe)" },
    { id: 4, value: "paypal", label: "Paypal" },
  ];

  return (
    <div className="summary">
      <h1 className={`summary-title ${titleClasess}`}>Order Summary</h1>
      <div
        className={`summary-content ${
          pageName === "checkout" &&
          " p-6 bg-gray-50 border border-gray-200 rounded"
        }`}
      >
        <div className="summary-content-title">
          <h1>Subtotal</h1>
          <h1>${total}</h1>
        </div>
        <div className="summary-content-shipping">
          <h2 className="summary-content-shipping-title">Shipping</h2>
          {shippingOptions.map((option) => (
            <div key={option.id} className="summary-content-shipping-options">
              <input
                type="radio"
                name="shipping"
                id={option.id}
                checked={selectedShipping === option.cost}
                onChange={() => handleShipping(option.cost)}
              />
              <label
                htmlFor={option.id}
              >{`${option.label}: $${option.cost}`}</label>
            </div>
          ))}
        </div>
        <div className="summary-content-total">
          <h1>Total</h1>
          <h1>${total + shipping}</h1>
        </div>
        <div
          className={`summary-content-bottom ${
            pageName === "checkout" && "text-center"
          }`}
        >
          {pageName === "checkout" && (
            <button className="btn-primary w-full text-xl capitalize font-semibold py-4">
              <Link href={`/${pageName}`} className="py-2 block">
                {btnTitle}
              </Link>
            </button>
          )}
          <p className="text-green-500 text-xl mt-4 mb-2">
            Free shipping on orders over $200.00
          </p>
          <Link href="/shop">Continue shopping</Link>
          {pageName === "thankyou" && (
            <>
              <div className="py-3 my-3 border-t">
                <h2 className="text-xl mb-4">Payment Method</h2>
                {paymentMethods.map((option) => (
                  <div
                    key={option.id}
                    className="flex gap-2 capitalize text-lg mb-2"
                  >
                    <input
                      type="radio"
                      name="payment"
                      id={option.value}
                      checked={selectedPayment === option.value}
                      onChange={() => handlePayment(option.value)}
                    />
                    <label
                      htmlFor={option.value}
                    >{`${option.label}: $${option.value}`}</label>
                  </div>
                ))}
              </div>
              <span>
                Your personal data will be used to process your order, support
                your experience throughout this website, and for other purposes
                described in our privacy policy.
              </span>
              <div className="flex items-center gap-3 mt-6">
                <input type="checkbox" name="policy" id="policy" />
                <label htmlFor="policy" className="cursor-pointer">
                  I agree to the website terms and conditions *
                </label>
              </div>

              <button className="btn-primary w-full text-xl capitalize font-semibold py-4 mt-8">
                <Link href={`/${pageName}`} className="py-2 block">
                  {btnTitle}
                </Link>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
