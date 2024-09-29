import RestaurantCard from "./RestaurantCard";
import resObject from "../utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {

      const response = await fetch(
        "https://www.swiggy.com/mapi/homepage/getCards?lat=12.91870&lng=74.85980"
      );
      const json = await response.json();
      console.log(json);
      setRestaurants(json?.response?.data?.data?.success?.cards[1]?.gridwidget?.gridElements?.infowithStyle?.restaurants );

  };

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredRestaurants = resObject.restaurants.filter(
              (res) => res.info.avgRating > 4.6
            );
            setRestaurants(filteredRestaurants);
          }}
        >

        </button>
      </div>

      <div className="card-container">
        {restaurants.map((i) => (
          <RestaurantCard key={i.info.id} restaurantData={i} />
        ))}
      </div>
    </div>
  );
};

export default Body;