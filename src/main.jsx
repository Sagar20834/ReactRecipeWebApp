import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Recipe from "../src/Components/Recipe.jsx";
import AddRecipe from "../src/Components/AddRecipe.jsx";
import AboutUs from "../src/Components/AboutUs.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Heropage from "./Components/Heropage.jsx";

import BlogCard from "./Components/BlogCard.jsx";
import PopularCategories from "./Components/PopularCategories.jsx";
import LoginContainer from "./Components/LoginContainer.jsx";
import SignUp from "./Components/SignUp.jsx";
import SignUpPageOld from "./Components/SignUpPageOld.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <Heropage />,
      },
      {
        path: "/recipe",
        element: <Recipe />,
      },
      {
        path: "/add-recipe",
        element: <AddRecipe />,
      },
      {
        path: "/blog",
        element: <BlogCard />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/popular-categories",
        element: <PopularCategories />,
      },
      {
        path: "/login",
        element: <SignUpPageOld />,
      },
      {
        path: "/signup",
        element: <LoginContainer />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
