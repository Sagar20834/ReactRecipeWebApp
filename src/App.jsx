import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import { Outlet } from "react-router-dom";
import Heropage from "./Components/Heropage";
import vector from "../src/assets/curve.png";
import ShareRecipe from "./Components/ShareRecipe";

import data from "./CardData";
import Footer from "./Components/Footer";
import Breadcrumb from "./Components/Breadcrumb";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
