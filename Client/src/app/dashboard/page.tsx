import Image from "next/image";
import Link from "next/link";
import "./Dashboard.scss";
const Dashboard = () => {
  return (
    <section className="dashboard ">
      <div className="dashboard-content">
        <div className="dashboard-content-left">
          <Link
            href="/"
            className="navbar-content-left-logo hover:scale-110 hover:transition-all hover:duration-300 transition-all duration-300"
          >
            Guza
          </Link>
          <h2 className="dashboard-content-left-title">We are coming!</h2>
          <p>We are preparing something amazing and exciting for you.</p>
          <form className="dashboard-content-left-form">
            <input
              type="email"
              className="input-outline w-full"
              placeholder="Email*"
              required
            />
            <button className="btn btn-primary">Subscribe</button>
          </form>
        </div>
        <div className="dashboard-content-right">
          <Image
            src="/images/coming-soon.png"
            alt="coming-soon"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
