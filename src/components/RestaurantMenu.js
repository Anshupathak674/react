import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  swiggy_menu_api_URL,
  IMG_CDN_URL,
  ITEM_IMG_CDN_URL,
  MENU_ITEM_TYPE_KEY,
  RESTAURANT_TYPE_KEY,
} from "../config";
import useRestaurant from "../utils/useRestaurant";
import useOnline from "../utils/useOnline";
import MenuCard from "./MenuCard";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  // how to read a dynamic URL params
  const { resId } = useParams();

  const [restaurant, menuItems] = useRestaurant(
    swiggy_menu_api_URL,
    resId,
    RESTAURANT_TYPE_KEY,
    MENU_ITEM_TYPE_KEY
  );

  const isOnline = useOnline();
  console.log(restaurant);
  if (!isOnline) return null;
  return !restaurant ? (
    <Shimmer />
  ) : (
    <div>
      {/* <button className="p-2 m-5 bg-green-500" onClick={handleAddItem()}>
        ADD +
      </button> */}
      <div className="p-2 m-2">
        <img
          className="m-8 p-8 w-40 h-40"
          src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
          alt={restaurant?.name}
        />
        <h2>{restaurant?.name}</h2>
        <p>{restaurant?.cuisines?.join(", ")}</p>
        <h3>{restaurant?.avgRating}</h3>
        <div>{restaurant?.sla?.slaString}</div>
        <div>{restaurant?.costForTwoMessage}</div>
      </div>

      <div className="flex flex-wrap border-spacing-1 p-2 m-2">
        {menuItems.map((item) => (
          <div className="w-[250px] border-spacing-1 p-2 m-2" key={item.id}>
            <MenuCard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
