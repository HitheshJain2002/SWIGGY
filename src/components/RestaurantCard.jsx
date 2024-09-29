import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ restaurantData }) => {
    const { name, cuisines, avgRating, cloudinaryImageId } = restaurantData.info;

    return (
      <div className="restaurant-card">
        <img
          src={CDN_URL+cloudinaryImageId} // Fixed the src issue
          alt={name}
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h5>{avgRating}</h5>
      </div>
    );
};
export default RestaurantCard;
