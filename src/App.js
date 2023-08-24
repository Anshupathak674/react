import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

// props - properties
// no key(not acceptable) <<<<<<<<< index(last option) < unique key(best practice)

// Virtual DOM - r
//React reconciliation - find diff b/w trees and render the changed portion
//Above concept used when same tags are there and changes are made, if tags
// are different, they can be uniquely identified using tagnames.

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
//root.render(<Header />);
