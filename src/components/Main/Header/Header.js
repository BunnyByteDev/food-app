import "./header.scss";
import { FaHamburger, FaCartPlus } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleHome = () => {
    navigate("/");
  };

  const handleCart = () => {
    navigate("/cart");
  };

  return (
    <div className="header">
      <div onClick={handleHome} className="header__logo cursor-pointer grow">
        <FaHamburger /> Food App
      </div>
      <div className="header__nav-items">
        <li
          onClick={handleHome}
          className={` cursor-pointer ${
            location.pathname === "/" ? "active" : ""
          }`}
        >
          Home
        </li>

        <li onClick={handleCart} className="cursor-pointer">
          <FaCartPlus />
        </li>
      </div>
    </div>
  );
};

export default Header;
