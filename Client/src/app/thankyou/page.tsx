import "./Thankyou.scss";
import Link from "next/link";

const Thankyou = () => {
  return (
    <section className="thankyou">
      <div className="container">
        <div className="thankyou-content">
          <h1 className="thankyou-content-title">
            Thank you. Your order has been received
          </h1>
          <div className="thankyou-content-details">
            <div className="thankyou-content-details-cell">
              <h3 className="thankyou-content-details-cell-title">
                Order Number
              </h3>
              <span>#191919</span>
            </div>
            <div className="thankyou-content-details-cell">
              <h3 className="thankyou-content-details-cell-title">Date</h3>
              <span>September 1,2020 </span>
            </div>
            <div className="thankyou-content-details-cell">
              <h3 className="thankyou-content-details-cell-title">Total</h3>
              <span>$300</span>
            </div>
            <div className="thankyou-content-details-cell">
              <h3 className="thankyou-content-details-cell-title">
                Payment Method
              </h3>
              <span>Cash on delivery</span>
            </div>
          </div>
          <Link href="/shop" className="btn-secondary">
            Continue Shopping
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Thankyou;
