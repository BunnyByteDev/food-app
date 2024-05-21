import { useDispatch } from "react-redux";
import { removeItem } from "../../utils/redux/cartSlice";
import { FaTrash } from "react-icons/fa";
import RestaurantItem from "../RestaurantMenu/RestaurantItem/RestaurantItem";
import "./Cart.scss";

const CardItem = ({ foodItem }) => {
  const dispatch = useDispatch();
  console.log(foodItem.card.info.id);

  const handleRemove = () => {
    dispatch(removeItem(foodItem.card.info.id)); // Assuming foodItem has an 'id' property
  };
  return (
    <div>
      <button onClick={handleRemove} className="delete_btn">
        <FaTrash />
        Delete Item
      </button>
      <RestaurantItem foodItem={foodItem} />
    </div>
  );
};

export default CardItem;
