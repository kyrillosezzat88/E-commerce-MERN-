import "./Contacts.scss";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "E-commerce Contact us",
  description: "contact us",
};
const Contacts = () => {
  return (
    <section className="contacts">
      <div className="contacts-head">
        <h2 className="contacts-head-subtitle">NEED HELP?</h2>
        <p className="contacts-head-title">
          Haven’t found what you’re looking for? Contact us
        </p>
      </div>
      <div className="container">
        <div className="contacts-content">
          <div className="contacts-content-left">
            <div>
              <h2 className="contacts-content-left-title">Address</h2>
              <p className="text-lg">8425 Melrose Ave, Los Angeles, CA 90069</p>
            </div>
            <div>
              <h2 className="contacts-content-left-title">Contact</h2>
              <p className="text-lg">
                Phone. +1 970 429 4170 <br />
                Email. hello@uxper.co
              </p>
            </div>
            <div>
              <h2 className="contacts-content-left-title">Hour of Operation</h2>
              <p className="text-lg">
                Mon - Fri: 08:30 - 20:00 <br />
                Sat & Sun: 09:30 - 21:30
              </p>
            </div>
          </div>
          <div className="contacts-content-right">
            <h2 className="contacts-content-right-title">Get in Touch</h2>
            <p>
              Your email address will not be published. Required fields are
              marked *
            </p>
            <form className="contacts-content-right-form">
              <input
                type="text"
                className="input-outline"
                placeholder="Name*"
                required
              />
              <input
                type="email"
                autoComplete="off"
                className="input-outline"
                placeholder="Email*"
                required
              />
              <input
                type="text"
                autoComplete="off"
                className="input-outline"
                placeholder="Phone number"
              />
              <input
                type="text"
                autoComplete="off"
                className="input-outline"
                placeholder="website"
              />
              <textarea
                name="message"
                id="message"
                cols={30}
                rows={5}
                placeholder="Message"
                className="input-outline md:col-span-2 resize-none"
              ></textarea>
              <button type="submit" className="btn btn-primary">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
