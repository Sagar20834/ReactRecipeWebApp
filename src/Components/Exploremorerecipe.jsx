import React from "react";
import logo1 from "../assets/Chicken Ranch Wrap.png";
import logo2 from "../assets/User icon.svg";
import logo3 from "../assets/calory.svg";
import { Link } from "react-router-dom";
import data from "../CardData";
import TrendingRecipeCard from "./TrendingRecipeCard";

const Exploremorerecipe = () => {
  return (
    <>
      <div className="mt-16">
        <h1 className="text-5xl font-bold ">Explore Receipe</h1>
        <p className="flex flex-row-reverse">
          <Link
            to={"/fb.com"}
            className="  text-[#a66d6a] text-lg  font-semibold "
          >
            View More
          </Link>
        </p>
      </div>
      <div className="  my-0 flex gap-24 flex-wrap ">
        {data.map(
          ({
            id,
            star,
            title,
            recipeimage,
            calimage,
            userimage,
            name,
            cal,
          }) => {
            return (
              <TrendingRecipeCard
                key={id}
                name={name}
                recipeimage={recipeimage}
                star={star}
                title={title}
                calimage={calimage}
                userimage={userimage}
                cal={cal}
              />
            );
          }
        )}
      </div>
    </>
  );
};

export default Exploremorerecipe;
