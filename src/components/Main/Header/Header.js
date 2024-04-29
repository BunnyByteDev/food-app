import "./header.scss";
import { FaHamburger, FaCartPlus } from "react-icons/fa";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <FaHamburger /> Food App
      </div>
      <div className="header__nav-items">
        <li className="cursor-pointer">Home</li>
        <li>About</li>
        <li>
          <FaCartPlus />
        </li>
      </div>
    </div>
  );
};

export default Header;
