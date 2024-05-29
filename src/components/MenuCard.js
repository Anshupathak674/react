import { ITEM_IMG_CDN_URL, IMG_CDN_URL } from "../config";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
const MenuCard = (item) => {
  {
    // if use props as parameter => const RestaurantCard = (props) =>
    // then = use it like <h2>{props.restaurant.data?.name}</h2>
  }
  // object destructuring
  // const  { cloudinaryImageId, name, cuisines, lastMileTravel } = restaurant.data;

  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <>
      <img
        margin={"8px"}
        padding={"8px"}
        height={"100px"}
        src={ITEM_IMG_CDN_URL + item.imageId}
      />
      <h2>{item.name}</h2>
      <h3>{item.description}</h3>
      <h3>{item.defaultPrice}</h3>
      <button
        className="p-2 m-5 bg-green-500 rounded-md"
        onClick={() => addFoodItem(item)}
      >
        ADD
      </button>
      {/* <h4>{lastMileTravel} minutes</h4> */}
    </>
  );
};

export default MenuCard;
