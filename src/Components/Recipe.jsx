import React from "react";
import Data from "../CardData";
import TrendingRecipeCard from "./TrendingRecipeCard";

const Recipe = () => {
  return (
    <div className="  m-16 flex gap-24 flex-wrap ">
      {Data.map(
        ({ id, star, title, recipeimage, calimage, userimage, name, cal }) => {
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
  );
};

export default Recipe;
