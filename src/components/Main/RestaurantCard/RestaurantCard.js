import "./restaurantCard.scss";
import { CDN_URL } from "../../../utils/constants.";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { id, name, cuisines, avgRating, cloudinaryImageId } = resData?.info;
  const { deliveryTime } = resData?.info?.sla;

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/restaurant/${id}`);
  };

  return (
    <div onClick={handleClick} className="resCard cursor-pointer grow">
      <div className="resCard__info">
        <h3>{name}</h3>
        <p>
          <FaStar className="resCard__info__star" /> {avgRating} •{" "}
          {deliveryTime} min
        </p>
        <p>{cuisines.join(" ")}</p>
      </div>
      <img alt={"Restaurant Image"} src={CDN_URL + cloudinaryImageId} />
    </div>
  );
};

export default RestaurantCard;
