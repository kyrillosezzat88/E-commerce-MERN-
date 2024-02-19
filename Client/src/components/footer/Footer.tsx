import Image from "next/image";
import "./Footer.scss";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content ">
          <div className="col-span-2">
            <h1 className="text-white text-lg">About Shop</h1>
            <p className="my-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Read
              more
            </p>
            <p>
              E. hello@uxper.co
              <br /> T. (00) 342 489 33
            </p>
          </div>
          <div className="footer-list">
            <h1 className="text-white text-lg mb-4">Company</h1>
            <ul>
              <li>About us</li>
              <li>Careers</li>
              <li>Store Locator</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className="footer-list">
            <h1 className="footer-list-title">Customer Care</h1>
            <ul>
              <li>Size Guide</li>
              <li>Help & FAQ</li>
              <li>Return</li>
              <li>Refer a Friend</li>
            </ul>
          </div>
          <div className="footer-list">
            <h1 className="footer-list-title">Terms & Policies</h1>
            <ul>
              <li>Duties and Taxes</li>
              <li>Shipping info</li>
              <li>Privacy Policy</li>
              <li>Terms Conditions</li>
            </ul>
          </div>
          <div className="footer-list">
            <h1 className="footer-list-title">Follow Us</h1>
            <ul>
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Pinterest</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-payments border-t border-gray-700 mt-12 py-6">
        <div className="container">
          <div className="footer-payments-content flex flex-wrap md:flex-nowrap justify-between items-center">
            <div>© 2023 Guza.Co. All rights reserved</div>
            <div className="flex gap-2">
              <Image src="/icons/visa.svg" alt="visa" width={32} height={32} />
              <Image
                src="/icons/mastercard.svg"
                alt="mastercard"
                width={32}
                height={32}
              />
              <Image
                src="/icons/paypal.svg"
                alt="paypal"
                width={32}
                height={32}
              />
              <Image
                src="/icons/stripe.svg"
                alt="stripe"
                width={32}
                height={32}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
