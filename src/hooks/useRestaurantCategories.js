import { useEffect, useState } from "react";
import { DATA_API_RESCATEGORIES } from "../utils/constants.";

const useRestaurantCategories = (resId) => {
  const [restaurantCategories, setRestaurantCategories] = useState(null);

  const fetchData = async () => {
    const data = await fetch(DATA_API_RESCATEGORIES + resId);
    const json = await data.json();
    setRestaurantCategories(json);
  };
  useEffect(() => {
    if (!restaurantCategories) fetchData();
  }, []);

  return restaurantCategories;
};

export default useRestaurantCategories;
