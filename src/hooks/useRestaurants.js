import { DATA_API } from "../utils/constants.";
import { useState, useEffect } from "react";

const useRestaurants = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(null);

  const fetchData = async () => {
    const data = await fetch(DATA_API);
    const json = await data.json();
    setListOfRestaurants(json);
  };
  useEffect(() => {
    if (!listOfRestaurants) fetchData();
  });

  return listOfRestaurants;
};

export default useRestaurants;
