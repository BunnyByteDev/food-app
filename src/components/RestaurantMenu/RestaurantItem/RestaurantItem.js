import { useDispatch } from "react-redux";
import { CDN_URL } from "../../../utils/constants.";
import "./RestaurantItem.scss";
import { FaStar } from "react-icons/fa";
import { addItem } from "../../../utils/redux/cartSlice";

const RestaurantItem = ({ foodItem }) => {
  const description = foodItem?.card?.info?.description;
  const price = foodItem?.card?.info?.price;
  const imageId = foodItem?.card?.info?.imageId;
  const name = foodItem?.card?.info?.name;
  const ratings = foodItem?.card?.info?.ratings;
  const rating = ratings?.aggregatedRating?.rating;
  const ratingCountV2 = ratings?.aggregatedRating?.ratingCountV2;

  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addItem(foodItem));
  };

  return (
    <div className="itemCard">
      <div className="itemCard__description">
        <p className="itemCard__description__name">{name}</p>
        <p className="itemCard__description__description">{description}</p>
        <p className="itemCard__description__price">₹{price}</p>

        {rating && ratingCountV2 && (
          <>
            <span>
              <FaStar className="itemCard__description__star" />
            </span>
            <span className="itemCard__description__rating">{rating}</span>
            <span className="itemCard__description__ratingCount">
              {" (" + ratingCountV2 + ")"}
            </span>
          </>
        )}
      </div>
      <div className="itemCard__image">
        {imageId && <img alt="" src={CDN_URL + imageId} />}
        {imageId && (
          <button
            onClick={handleAddItem}
            className="itemCard__image__buttonImg cursor-pointer"
          >
            ADD +
          </button>
        )}
      </div>
      {!imageId && (
        <button className="itemCard__image__button cursor-pointer">
          ADD +
        </button>
      )}
    </div>
  );
};

export default RestaurantItem;
