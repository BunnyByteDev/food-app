import "./restaurantCard.scss";
import { CDN_URL } from "../../../utils/constants.";
import { FaStar } from "react-icons/fa";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, cloudinaryImageId } = resData?.info;
  const { deliveryTime } = resData?.info?.sla;
  console.log(resData);

  return (
    <div className="resCard cursor-pointer grow">
      <div className="resCard__info">
        <h3>{name}</h3>
        <p>
          <FaStar /> {avgRating} • {deliveryTime}
        </p>
        <p>{cuisines.join(" ")}</p>
      </div>
      <img alt={"Restaurant Image"} src={CDN_URL + cloudinaryImageId} />
    </div>
  );
};

export default RestaurantCard;
