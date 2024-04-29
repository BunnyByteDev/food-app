import useRestaurants from "../../../hooks/useRestaurants";
import bgImage from "../../../style-assets/bg-image.jpg";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import "./MainComponent.scss";
import { useState, useEffect } from "react";

const MainComponent = () => {
  const resList = useRestaurants();
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    // Use useEffect to set filtered restaurants
    setFilteredRestaurants(resList); // Set filtered restaurants initially
  }, [resList]); // Trigger useEffect when resList changes

  const showTopRated = () => {
    setFilteredRestaurants(resList.filter((res) => res.info.avgRating > 4));
  };

  if (!resList) {
    return <div>Loading...</div>;
  }

  return (
    <div className="main">
      <div className="main__bgImage">
        <img alt={"background"} src={bgImage} />
      </div>

      <div className="main__tagLine">
        <h1>The best restaurants at your door!</h1>
        <h2>What are you craving today?</h2>
      </div>

      <div className="main__search">
        search bar
        <div className="main__filterBtn">
          <button onClick={showTopRated}>Top Rated Restaurants</button>
        </div>
      </div>

      <div className="main__resContainer">
        {filteredRestaurants?.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default MainComponent;
