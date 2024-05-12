import useRestaurantCategories from "../../hooks/useRestaurantCategories";
import useRestaurantInfo from "../../hooks/useRestaurantInfo";
import Shimmer from "../Shimmer/Shimmer";
import RestaurantCategory from "./RestaurantCategory/RestaurantCategory";
import { useParams } from "react-router-dom";
import "./RestaurantMenu.scss";
import { FaStar, FaClock } from "react-icons/fa";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resCategories = useRestaurantCategories(resId);
  const resInfo = useRestaurantInfo(resId);
  const [showIndex, setShowIndex] = useState(0);
  const [showItems, setShowItems] = useState(true);

  const name = resInfo?.info?.name;
  const avgRating = resInfo?.info?.avgRating;
  const deliveryTime = resInfo?.info?.sla?.deliveryTime;

  const cuisines = resInfo?.info?.cuisines;
  const cuisineArray = cuisines ? cuisines.join(", ") : "";

  const toggleItemsVisibility = () => {
    setShowItems(!showItems); // Toggle the visibility of items
  };

  if (!resInfo || !resCategories) {
    return <Shimmer />;
  } else
    return (
      <div>
        <div className="menu">
          <div className="menu__resDescription">
            <div className="menu__resDescription__titles">
              <h3>{name}</h3>
              <p className="menu__resDescription__cuisines">{cuisineArray}</p>
            </div>
            <div className="menu__resDescription__score">
              {!avgRating ? (
                avgRating === ""
              ) : (
                <p className="menu__resDescription__avgRating">
                  <FaStar className="menu__resDescription__star" />
                  {" " + avgRating}
                </p>
              )}
              <p className="menu__resDescription__deliveryTime">
                <FaClock className="menu__resDescription__clock" />
                {" " + deliveryTime}
              </p>
            </div>
          </div>
          <hr></hr>
          <div className="menu__categoryContainer">
            {resCategories?.map((category, index) => (
              <RestaurantCategory
                key={index}
                index={index}
                resData={category}
                toggleItemsVisibility={toggleItemsVisibility}
                showItems={index === showIndex && showItems}
                setShowIndex={() => setShowIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    );
};

export default RestaurantMenu;
