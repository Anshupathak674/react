//react element
const Title = () => {
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://lh3.googleusercontent.com/p/AF1QipO_6cTc3QdC9L2vAOyCkUPG-G-9YeFxo3YiDu3R=w1080-h608-p-no-v0"
    />
  </a>;
};

//Composing Components
const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
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