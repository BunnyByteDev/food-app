import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import RestaurantMenu from "../RestaurantMenu/RestaurantMenu";

const Menu = () => {
  return (
    <div className="main-menu">
      <Header />
      <RestaurantMenu />
      <Footer />
    </div>
  );
};

export default Menu;
