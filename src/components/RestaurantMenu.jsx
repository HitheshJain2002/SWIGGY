import React, { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API_URL, CDN_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [menu, setMenu] = useState(null);
  const { Id } = useParams();

  useEffect(() => {
    fetchData();
  }, [Id]);

  const fetchData = async () => {
    try {
      const response = await fetch(MENU_API_URL + Id);
      const json = await response.json();
      setMenu(json);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  if (!menu) return <Shimmer />;

  // Destructure restaurant details
  const { name, cuisines, costForTwo, cloudinaryImageId } = menu?.data?.cards?.[2]?.card?.card?.info || {};
  const itemCards = menu?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards || [];

  // Construct the restaurant image URL
  const restaurantImageUrl = `${CDN_URL}${cloudinaryImageId}`;

  return (
    <div className="max-w-4xl mx-auto mt-10 px-4 py-8">
      {/* Restaurant Info Section */}
      <div className="mb-8 p-6 bg-white rounded-lg shadow-md flex flex-col md:flex-row justify-between items-start">
        {/* Restaurant Name & Details */}
        <div className="flex-1 md:mr-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">{name}</h1>
          <p className="text-lg text-gray-600 mb-2">
            <span className="font-medium text-gray-700">Cuisines:</span> {cuisines?.join(", ")}
          </p>
          <p className="text-lg text-gray-600">
            <span className="font-medium text-gray-700">Cost for Two:</span> ₹{costForTwo ? costForTwo / 100 : "N/A"}
          </p>
        </div>

        {/* Restaurant Image */}
        {cloudinaryImageId && (
          <div className="w-full md:w-64 h-64 flex-shrink-0">
            <img
              src={restaurantImageUrl}
              alt={name}
              className="w-full h-full object-cover rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
      </div>

      {/* Menu Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600 mb-6">
          Menu
        </h2>

        <ul className="space-y-4">
          {itemCards.map((item) => {
            const itemImageUrl = item?.card?.info?.imageId ? `${CDN_URL}${item.card.info.imageId}` : null;

            return (
              <li
                key={item.card.info.id}
                className="flex justify-between items-center p-4 bg-white hover:bg-orange-50 rounded-lg transition-colors duration-200 shadow-sm border-b border-gray-100"
              >
                <div className="flex items-center">
                  {itemImageUrl && (
                    <img
                      src={itemImageUrl}
                      alt={item.card.info.name}
                      className="w-16 h-16 object-cover rounded-lg mr-4 shadow-sm"
                    />
                  )}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{item.card.info.name}</h3>
                    <p className="text-sm text-gray-500">{item.card.info.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-lg font-medium text-orange-600">
                    ₹{item.card.info.price ? item.card.info.price / 100 : "Price Not Available"}
                  </span>
                  <button className="px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors duration-200 text-sm font-medium">
                    Add +
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
