import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import UserContext from "../utils/UserContext";
// re-rendering happens when either the state changes or the
// props changes

const Body = () => {
  const searchVar = useState(""); //To create state variable
  const [searchInput, setSearchInput] = searchVar;

  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  //console.log(restaurants);
  const { user, setUser } = useContext(UserContext);

  // whatever is there as the second argument(dependency array)
  // in the useEffect function, whenever it is changed, the useEffect
  // function will be called.

  // if we don't give anything in the dependency array, it will be
  // called just once and after render as it is not dependent
  // on anything.

  // useEffect(() => {
  //   console.log("Call this when dependency array changes.");
  // }, []);

  useEffect(() => {
    getRestaurants();
  }, []);

  // function getRestaurants() {
  //   debugger;
  //   const response = fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9514904&lng=77.7019242&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //   );
  //   if (response.ok) {
  //     const json = response.json();
  //     console.log(json);
  //     setRestaurants(
  //       json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //     );
  //   }
  // }
  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9483469&lng=77.70246279999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);
    setAllRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }
  //console.log("initial render");
  //console.log(allRestaurants?.length);

  //early return - not return the component
  // if (!allRestaurants) return null;

  if (allRestaurants?.length === 0) return <Shimmer />;
  else if (filteredRestaurants?.length === 0) {
    return (
      <>
        <div className="search-container p-5 my-2 bg-pink-50">
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
            className="search-btn p-3 m-2 bg-purple-900 text-white rounded-lg text-lg"
            onClick={() => {
              // need to filter the data
              const data = filterData(searchInput, allRestaurants);
              // const data = filterData(searchInput); this is the first method to sort the search issue.
              // update the state - restaurants
              setfilteredRestaurants(data);
            }}
          >
            Search
          </button>
          <input
            value={user.name}
            onChange={(e) =>
              setUser({
                ...user,
                name: e.target.value,
              })
            }
          ></input>
          <input
            value={user.email}
            onChange={(e) =>
              setUser({
                ...user,
                email: e.target.value,
              })
            }
          ></input>
          {
            // in button tag, reading the searchInput. hence, both reading and writing
            // it is called two way binding.
          }
        </div>
        <h1>No restaurants found!!</h1>
      </>
    );
  } else {
    return (
      <>
        <div className="search-container p-5 my-2 bg-pink-50 text-white">
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
            className="search-btn p-3 m-2 bg-purple-900 text-white rounded-lg text-lg"
            onClick={() => {
              // need to filter the data
              const data = filterData(searchInput, allRestaurants);
              // const data = filterData(searchInput); this is the first method to sort the search issue.
              // update the state - restaurants
              setfilteredRestaurants(data);
            }}
          >
            Search
          </button>

          {
            // in button tag, reading the searchInput. hence, both reading and writing
            // it is called two way binding.
          }
          <input
            value={user.name}
            onChange={(e) =>
              setUser({
                ...user,
                name: e.target.value,
              })
            }
          ></input>
          <input
            value={user.email}
            onChange={(e) =>
              setUser({
                ...user,
                email: e.target.value,
              })
            }
          ></input>
        </div>
        <div className="restaurant-list flex flex-wrap border-spacing-1 p-2 m-2">
          {filteredRestaurants?.map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant.info.id}
                key={restaurant.info.id}
              >
                <RestaurantCard {...restaurant.info} />
              </Link>
            );
          })}
        </div>
      </>
    );
  }
};
export default Body;
