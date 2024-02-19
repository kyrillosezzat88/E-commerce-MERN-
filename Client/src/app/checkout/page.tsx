import { Breadcrumbs, Order } from "@/components";
import Image from "next/image";
import "./Checkout.scss";
const Checkout = () => {
  return (
    <section className="checkout">
      <Breadcrumbs
        links={[
          { name: "home", url: "/" },
          { name: "checkout", url: "/checkout" },
        ]}
        className="bg-gray-100 rounded p-2 py-6 [&>ul]:container"
      />
      <div className="container">
        <div className="checkout-content">
          <div className="checkout-content-billing">
            <div className="checkout-content-billing-head">
              <p className="checkout-content-billing-head-actions">
                <Image
                  src="/icons/account-2.svg"
                  alt="coupon"
                  width={18}
                  height={18}
                />
                <span className="text-lg">
                  Returning customer? Click here to login
                </span>
              </p>
              <p className="checkout-content-billing-head-actions">
                <Image
                  src="/icons/present.svg"
                  alt="coupon"
                  width={18}
                  height={18}
                />
                <span className="text-lg">
                  Have a coupon? Click here to enter your code
                </span>
              </p>
            </div>
            <div className="checkout-content-billing-content">
              <h2 className="checkout-content-billing-content-title">
                Billing Details
              </h2>
              <form className="checkout-content-billing-content-form">
                <div className="form-group flex flex-col">
                  <label htmlFor="email" className="text-2xl capitalize mb-3">
                    Contact information
                  </label>
                  <input
                    type="email"
                    className="input-outline"
                    placeholder="Enter your email *"
                    required
                  />
                </div>
                <div className="form-group flex gap-2">
                  <input
                    type="checkbox"
                    id="offersEmail"
                    className="input-outline"
                  />
                  <label htmlFor="offersEmail" className="capitalize">
                    Email me with news and offers
                  </label>
                </div>
                <h2 className="text-4xl font-JostReg ">Shipping Address</h2>
                <div className="flex gap-10">
                  <input
                    type="text"
                    name="firstName"
                    className="input-outline w-full"
                    placeholder="First Name *"
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    className="input-outline w-full"
                    placeholder="Last Name *"
                    required
                  />
                </div>
                <input
                  type="text"
                  name="country"
                  className="input-outline"
                  placeholder="Counter/Region *"
                  required
                />
                <input
                  type="text"
                  name="street"
                  className="input-outline"
                  placeholder="Street Address *"
                  required
                />
                <input
                  type="text"
                  name="city"
                  className="input-outline"
                  placeholder="Town/City *"
                  required
                />
                <input
                  type="text"
                  name="postcode"
                  className="input-outline"
                  placeholder="Postcode *"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  className="input-outline"
                  placeholder="Phone *"
                  required
                />
                <div className="form-group flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="createAccount"
                    className="input-outline"
                  />
                  <label htmlFor="createAccount" className="capitalize">
                    Create an account
                  </label>
                </div>
                <textarea
                  name="notes"
                  id="notes"
                  className="input-outline"
                  cols={30}
                  rows={8}
                  placeholder="Order Notes (optional)"
                ></textarea>
              </form>
            </div>
          </div>
          <div className="checkout-content-order">
            <Order />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
