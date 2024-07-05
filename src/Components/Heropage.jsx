import React from "react";
import image1 from "../assets/Vector.png";

import vector from "../assets/Vector.svg";
import { Link } from "react-router-dom";
import ShareRecipe from "./ShareRecipe";
import TrendingRecipe from "./TrendingRecipe";
import Blog from "./Blog";
import Exploremorerecipe from "./Exploremorerecipe";
import Newsletter from "./Newsletter";
import PopularCategoriesContainer from "./PopularCategoriesContainer";
import Clients from "./Clients";
import Footer from "./Footer";

const Heropage = () => {
  return (
    <>
      <div className="hero-page flex  justify-between items-center    max-w-full mx-16 mt-8 ">
        <div className="side-1 flex  flex-col justify-start items-start w-1/2   ">
          <h1 className="text-5xl font-bold">Your Daily Dish</h1>
          <h1 className="text-5xl font-bold">
            A <span className=" text-[#A17F74] "> Food </span> Journey
          </h1>
          <p className=" mt-12">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure et
            officia voluptatem suscipit nostrum libero molestiae reiciendis
            laudantium sit, dolore fuga atque in quasi ex expedita incidunt
            laboriosam magnam a, quidem quam maxime labore blanditiis
            distinctio. Inventore natus eveniet unde dolores soluta error quos
            nam. Culpa excepturi ratione facilis soluta?
          </p>
          <button className=" bg-[#B26357] min-w-32 min-h-9  rounded-lg my-5">
            Sign Up
          </button>
          <div className="flex  justify-center items-center gap-3">
            <p>Do You Have an Account ?</p>
            <Link to={"/"} className=" text-[#B26357]">
              Log in
            </Link>
          </div>
        </div>
        <div className="side-2  flex flex-col justify-center items-center w-1/2  ">
          <img src={image1} alt=" hero" />
          <div className=" -ml-80 -mt-12 card-home w-[324px] min-h-[124px] shadow-[0_12px_50px_-5px_rgba(0,0,0,0.4)] rounded bg-[#F5F5F5]">
            <div className="title-card flex">
              <img
                src={vector}
                alt="image"
                className=" ml-4 -mt-8 rounded-full border-4"
              />
              <div className="ml-4">
                <h1>Sara Johnson</h1>
                <h2> * * * * 4/5</h2>
              </div>
            </div>
            <div>
              <p className="px-2 mb-8">
                Wow , this recipe is a flavour explosion in my mouth ! Very
                delicious.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-16 mt-8">
        <ShareRecipe />
        <TrendingRecipe />
        <Blog />
        <Exploremorerecipe />
      </div>
      <Newsletter />
      <div className="mx-16 mt-8">
        <PopularCategoriesContainer />
        <Clients />
      </div>
    </>
  );
};

export default Heropage;
