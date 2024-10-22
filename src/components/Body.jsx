import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import { Shimmer } from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const isOnline = useOnlineStatus();

  console.log("body render");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.91870&lng=74.85980&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await response.json();
      
      const restaurantsData =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      
      setRestaurants(restaurantsData);
      setFilterRestaurants(restaurantsData);
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    }
  };

  const handleSearch = () => {
    const filteredRestaurants = restaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase().trim())
    );
    setFilterRestaurants(filteredRestaurants);
  };

  const handleTopRatedFilter = () => {
    const filteredRestaurants = restaurants.filter(
      (res) => res.info.avgRating > 4.4
    );
    setFilterRestaurants(filteredRestaurants);
  };

  if (isOnline === false) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold text-gray-800">
          Looks like you are offline!!
        </h1>
      </div>
    );
  }

  return filterRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Search and Filter Section with improved styling */}
      {/* Search and Filter Section with improved styling */}
<div className="mb-8">
  {/* Container for search and filter */}
  <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
    {/* Search Input Group */}
    <div className="flex-1 flex flex-col sm:flex-row gap-4">
      <div className="flex-1 flex gap-2">
        <input
          type="text"
          className=" px-3 py-1.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
          placeholder="Search restaurants..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className=" px-4 py-1.5 bg-orange-500 text-white rounded-md text-sm hover:bg-orange-600 transition-colors whitespace-nowrap"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>

    {/* Filter Button */}
    <button
      className="px-4 py-1.5 bg-gray-800 text-white rounded-md text-sm hover:bg-gray-900 transition-colors whitespace-nowrap"
      onClick={handleTopRatedFilter}
    >
      Top Rated Restaurants
    </button>
  </div>
</div>

      {/* Restaurant Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
        {filterRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={`/restaurants/${restaurant.info.id}`}
            className="w-full"
          >
            <RestaurantCard restaurantData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;