import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  // best way as we are subscribing only to the items array
  // of the cart slice of the store. Always subscribe to the required part only otherwise it will give performance issue
  // because if you subscribe to store, if anysthing changes in any part of the store, this component will also undergo
  // the re-rendering which is not required/feasible
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  console.log(cartItems);
  return (
    <>
      <h1 className="font-bold text-3xl">Cart Items - {cartItems.length}</h1>
      <button
        className="bg-green-100 p-2 m-2"
        onClick={() => handleClearCart()}
      >
        Clear Cart
      </button>
      <div className="flex flex-wrap">
        {cartItems?.map((item) => (
          <FoodItem key={item.id} {...item} />
        ))}
      </div>
    </>
  );
};

export default Cart;
