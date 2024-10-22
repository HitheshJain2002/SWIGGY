import React from "react";

// Swiggy CDN URL - You can move this to constants file later
const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

const RestaurantCard = ({ restaurantData }) => {
  const {
    name,
    cuisines,
    avgRating,
    cloudinaryImageId,
    costForTwo,
    deliveryTime,
    locality,
    aggregatedDiscountInfoV3,
    sla
  } = restaurantData.info;

  const imageUrl = `${CDN_URL}${cloudinaryImageId}`;

  return (
    <div className="w-full sm:w-[330px] p-4 bg-white transition-all duration-300">
      <div className="bg-white rounded-2xl shadow-md hover:shadow-lg overflow-hidden">
        
        {/* Image Container */}
        <div className="relative">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-48 object-cover"
          />

          {/* Discount Banner */}
          {aggregatedDiscountInfoV3?.header && (
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-2">
              <p className="text-white font-bold">
                {aggregatedDiscountInfoV3.header}
              </p>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          
          {/* Name and Rating Row */}
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-gray-800 truncate flex-1">
              {name}
            </h3>
            {avgRating && (
              <div className="flex items-center gap-1 px-2 py-1 bg-green-500 text-white rounded-lg">
                <span className="text-sm">⭐</span>
                <span className="font-bold">{avgRating}</span>
              </div>
            )}
          </div>

          {/* Cuisines */}
          <p className="text-gray-600 text-sm mb-2 line-clamp-1">
            {cuisines?.join(", ")}
          </p>

          {/* Location */}
          <p className="text-gray-500 text-sm mb-3">
            📍 {locality}
          </p>

          {/* Divider */}
          <div className="border-t border-gray-100 my-2"></div>

          {/* Footer Info */}
          <div className="flex items-center justify-between text-sm text-gray-700">
            <div className="flex items-center gap-1">
              <span>⏱️</span>
              <span>{sla?.deliveryTime || deliveryTime} mins</span>
            </div>
            <div className="flex items-center gap-1">
         
              <span>{costForTwo } </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
