import { CDN_URL } from "../../../utils/constants.";
import "./RestaurantItem.scss";
import { FaStar } from "react-icons/fa";

const RestaurantItem = (props) => {
  //const name = props?.foodItem?.card?.info?.name;

  const { description, price, imageId, name, ratings } =
    props?.foodItem?.card?.info;

  const { rating, ratingCountV2 } = ratings?.aggregatedRating;

  return (
    <div className="itemCard">
      <div className="itemCard__description">
        <p className="itemCard__description__name">{name}</p>
        <p className="itemCard__description__description">{description}</p>
        <p className="itemCard__description__price">₹{price}</p>

        {!rating || !ratingCountV2 ? (
          <div></div>
        ) : (
          <>
            <span>
              <FaStar className="itemCard__description__star" />
            </span>
            <span className="itemCard__description__rating"> {rating}</span>
            <span className="itemCard__description__ratingCount">{` (${ratingCountV2})`}</span>
          </>
        )}
      </div>
      <div className="itemCard__image">
        {imageId && <img alt={""} src={CDN_URL + imageId} />}
        {imageId && (
          <button className="itemCard__image__buttonImg cursor-pointer">
            ADD
          </button>
        )}
      </div>
      {!imageId && (
        <button className="itemCard__image__button cursor-pointer">ADD</button>
      )}
    </div>
  );
};

export default RestaurantItem;
