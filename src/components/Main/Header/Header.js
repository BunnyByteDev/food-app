import "./header.scss";
import { FaHamburger, FaCartPlus } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const cartItems = useSelector((store) => store.cart.items);

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
          <FaCartPlus /> ({cartItems.length} items)
        </li>
      </div>
    </div>
  );
};

export default Header;
