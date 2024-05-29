import { useState, useContext } from "react";
import Logo from "../logo.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
//react element
const Title = () => {
  <a href="/">
    <img className="h-28 p-2" alt="logo" src={Logo} />
  </a>;
};

//Composing Components
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();

  const { user } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between bg-pink-50 shadow-lg">
      <Title />
      <div className="nav-items text-lg text-rose-900">
        <ul className="flex py-10">
          <Link to="/">
            <li className="px-2">Home</li>
          </Link>
          {
            // this link tag is an anchor tag itself at the end of the day. If we will inspect elements
            // in the browser, there we will see anchor tag only because browser understands anchor tag
            // only and remix developers had to convert Link to anchor behind the scenes.
          }
          <Link to="/about">
            <li className="px-2">About</li>
          </Link>
          <Link to="/contact">
            <li className="px-2">Contact</li>
          </Link>
          <Link to="/instamart">
            <li className="px-2">Instamart</li>
          </Link>
          <Link to="/cart">
            <li className="px-2">Cart - {cartItems.length} Items</li>
          </Link>
        </ul>
      </div>
      {/* <h1>{isOnline ? "✅" : "❌"}</h1> */}
      {
        // here you can write any JS expressions but not JS statements.
        // a = 10          => line 1
        // console.log(a)  => line 2
        // line 1 and 2 not allowed in two different lines
        // ((a = 10), console.log(a)) => we can do like this
        // https://react.dev/learn/javascript-in-jsx-with-curly-braces
      }
      <h1 className="p-10 font-bold text-red-900 text-xl">{user.name}</h1>
      {isLoggedIn ? (
        <button
          className="p-10 font-bold text-red-900 text-xl"
          onClick={() => setIsLoggedIn(false)}
        >
          Logout
        </button>
      ) : (
        <button
          className="p-10 font-bold text-red-900 text-xl"
          onClick={() => setIsLoggedIn(true)}
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Header;

// default
//export default { Title, Header };
//import Obj from "./components/Header.js"

//named
// export { Title, Header };
// import * as Obj from "./components/Header.js"

// named + default
// export default Header;
// export { title };
// import Header, { Title } from "./components/Header.js";

// Also, we can name this file as .js or .jsx, both are fine.
// while importing also
