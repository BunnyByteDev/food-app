import RestaurantItem from "../RestaurantItem/RestaurantItem";
import { TiArrowSortedDown } from "react-icons/ti";
import "./RestaurantCategory.scss";

const RestaurantCategory = ({
  resData,
  showItems,
  setShowIndex,
  index,
  toggleItemsVisibility,
}) => {
  const name = resData?.category;
  const foodItems = resData?.foodItems;

  const handleClick = () => {
    setShowIndex(index); // Always set the current index
    toggleItemsVisibility();
  };

  return (
    <div className="accordion">
      <div className="category cursor-pointer" onClick={handleClick}>
        <h3 className="category__name">{name}</h3>
        <TiArrowSortedDown className="category__arrow" />
      </div>

      {showItems &&
        foodItems?.map((item, index) => (
          <RestaurantItem key={index} foodItem={item} />
        ))}
      <hr></hr>
    </div>
  );
};

export default RestaurantCategory;
