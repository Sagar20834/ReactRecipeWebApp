import React from "react";
import data from "../CardData";
import TrendingRecipeCard from "./TrendingRecipeCard";
import { Link } from "react-router-dom";

const TrendingRecipe = () => {
  //   console.log(data);

  return (
    <div className="mt-6">
      <h1 className="text-5xl font-bold ">Trending Receipe</h1>
      <p className="flex flex-row-reverse">
        <Link
          to={"/recipe"}
          className="  text-[#a66d6a] text-lg  font-semibold "
        >
          View More
        </Link>
      </p>
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
    </div>
  );
};

export default TrendingRecipe;
