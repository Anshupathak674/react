import { ITEM_IMG_CDN_URL } from "../config";
import { removeItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
const FoodItem = (item) => {
  const dispatch = useDispatch();

  const removeFoodItem = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
      <img src={ITEM_IMG_CDN_URL + item.imageId} />
      <h2 className="font-bold text-xl">{item.name}</h2>
      <h3>{item.catogory}</h3>
      <h4>Rupees:{item.price / 100}</h4>
      <button
        className="p-2 m-5 bg-green-500 rounded-md"
        onClick={() => removeFoodItem(item)}
      >
        Remove
      </button>
    </div>
  );
};

export default FoodItem;
