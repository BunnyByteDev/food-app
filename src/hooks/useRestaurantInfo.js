import { useEffect, useState } from "react";
import { DATA_API_RESINFO } from "../utils/constants.";

const useRestaurantInfo = (resId) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  const fetchData = async () => {
    const data = await fetch(DATA_API_RESINFO + resId);
    const json = await data.json();
    setRestaurantInfo(json);
  };
  useEffect(() => {
    if (!restaurantInfo) fetchData();
  }, []);

  return restaurantInfo;
};

export default useRestaurantInfo;
