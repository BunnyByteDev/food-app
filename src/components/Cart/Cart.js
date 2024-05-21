import { useDispatch, useSelector } from "react-redux";
import Footer from "../Main/Footer/Footer";
import Header from "../Main/Header/Header";
import "./Cart.scss";
import { clearCart } from "../../utils/redux/cartSlice";
import CardItem from "./CartItem";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
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
          <div>
            <h2>Cart is empty! Add some items!</h2>
            <button>Explore</button>
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
