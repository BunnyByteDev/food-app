import useRestaurants from "../../../hooks/useRestaurants";
import bgImage from "../../../style-assets/bg-image.jpg";
import Shimmer from "../../Shimmer/Shimmer";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import CardPromoted from "../RestaurantCard/CardPromoted";
import "./MainComponent.scss";
import { useState, useEffect } from "react";

const MainComponent = () => {
  const resList = useRestaurants();
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setsearchText] = useState("");
  const RestaurantCardPromoted = CardPromoted(RestaurantCard);

  useEffect(() => {
    setFilteredRestaurants(resList);
  }, [resList]);

  const showTopRated = () => {
    setFilteredRestaurants(resList.filter((res) => res.info.avgRating > 4));
  };

  if (!resList) {
    return <Shimmer />;
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
        <div>
          <input
            className="main__search__searchInput"
            type="text"
            data-testid="searchInput"
            placeholder="Type a meal..."
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="main__search__searchBtn cursor-pointer"
            onClick={() => {
              const filtered = filteredRestaurants?.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filtered);
            }}
          >
            Search
          </button>
        </div>
        <div className="main__search__filterBtn">
          <button className="cursor-pointer" onClick={showTopRated}>
            Top Rated Restaurants
          </button>
        </div>
      </div>

      <div className="main__resContainer">
        {filteredRestaurants?.map((restaurant) =>
          restaurant.info.avgRating > 4.1 ? (
            <RestaurantCardPromoted
              key={restaurant.info.id}
              resData={restaurant}
            />
          ) : (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          )
        )}
      </div>
    </div>
  );
};

export default MainComponent;
