import data from "../PopularRecipeData";
import React from "react";
import PopularCategoriesCard from "./PopularCategoriesCard";

const PopularCategories = () => {
  return (
    <div className="mt-3 grid grid-cols-4 gap-x-6 gap-y-6  justify-items-center items-center ">
      {data.map(({ id, category, recipeimage }) => (
        <PopularCategoriesCard
          key={id}
          category={category}
          recipeimage={recipeimage}
        />
      ))}
    </div>
  );
};

export default PopularCategories;
