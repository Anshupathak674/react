import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import Profileclass from "./components/ProfileClass";
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
      <Outlet />
      {
        // outlet is a named export component given by react-router-dom
        // which acts as container or placeholder for the children of the AppLayout component.
        // It will take the appropriate component according to the router configuration.
      }
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile", // no "/", otherwise it will consider it from root, but we have to add after about, not root
            element: <Profileclass />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);
