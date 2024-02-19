import { useLocation } from "react-router-dom";
import "./Navbar.scss";
import ProfilePic from "../../assets/img/profile.png";
import { ReactComponent as DashboardIcon } from "../../assets/icons/dashboard.svg";
import { BellIcon, MenuIcon } from "../../assets/icons";
const Navbar = () => {
  const { pathname } = useLocation();
  const capitalize = (string: string) => {
    return string.replace("/", "").slice(0, 1).toUpperCase() + string.slice(2);
  };
  return (
    <nav className="navbar">
      <h2 className="navbar-title">
        <MenuIcon />
        <DashboardIcon /> {capitalize(pathname)}
      </h2>
      <div className="navbar-content">
        <div className="navbar-content-notifications">
          <span className="navbar-content-notifications-counter">1</span>
          <BellIcon />
        </div>
        <img src={ProfilePic} width={32} height={32} />
      </div>
    </nav>
  );
};

export default Navbar;
