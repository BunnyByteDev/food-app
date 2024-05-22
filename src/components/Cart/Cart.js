import { useDispatch, useSelector } from "react-redux";
import Footer from "../Main/Footer/Footer";
import Header from "../Main/Header/Header";
import "./Cart.scss";
import { clearCart } from "../../utils/redux/cartSlice";
import CardItem from "./CartItem";
import { FaShoppingBasket } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <Header />
      <div className="cart">
        {cartItems.length !== 0 && (
          <button onClick={handleClearCart} className="cart__btn">
            Clear Cart
          </button>
        )}
        {cartItems.length === 0 && (
          <div className="cart__empty">
            <h2>Your cart is empty, add some items!</h2>
            <FaShoppingBasket className="cart__empty__faicon" />
            <button
              onClick={() => navigate("/")}
              className="cart__empty__button"
            >
              Explore
            </button>
          </div>
        )}
        <div className="cart__items" data-testid="cart-nav-item">
          {cartItems.map((item, index) => (
            <CardItem key={index} foodItem={item} index={index} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
