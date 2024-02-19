import "./SideMenu.scss";
import MenuLinks from "./MenuLinks.ts";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/img/Logo.png";

const SideMenu = () => {
  return (
    <div className="SideMenu">
      <img className="logo" src={Logo} alt="Metrix-logo" />
      <div className="SideMenuDesc_content">
        <ul>
          {MenuLinks.map((link, index) => (
            <NavLink key={index} to={link.route}>
              <li className="flex">
                <link.icon />
                {link.name}
              </li>
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
