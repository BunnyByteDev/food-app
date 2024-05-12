import "./CardPromoted.scss";

const CardPromoted = (RestaurantCard) => {
  return (props) => (
    <div>
      <label>Promoted</label>
      <RestaurantCard {...props} />
    </div>
  );
};

export default CardPromoted;
