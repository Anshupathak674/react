import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

function filterData(searchText) {
  const filteredData = restaurantList.filter((restaurant) =>
    restaurant.data.name.includes(searchText)
  );
  return filteredData;
}

const Body = () => {
  const searchVar = useState(""); //To create state variable
  const [searchInput, setSearchInput] = searchVar;

  const [restaurants, setRestaurants] = useState(restaurantList);
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchInput} // writing the searchInput
          onChange={(e) => {
            // e.target.value -> whatever you write in input
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            // need to filter the data
            // update the state - restaurants
            const data = filterData(searchInput);
            setRestaurants(data);
          }}
        >
          Search
        </button>
        {
          // in button tag, reading the searchInput. hence, both reading and writing
          // it is called two way binding.
        }
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};
export default Body;
