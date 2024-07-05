import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import { Outlet } from "react-router-dom";
import Heropage from "./Components/Heropage";
import vector from "../src/assets/curve.png";
import ShareRecipe from "./Components/ShareRecipe";

import data from "./CardData";

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
