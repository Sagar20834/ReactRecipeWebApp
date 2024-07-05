import React from "react";
import user from "../assets/user.svg";
import logo3 from "../assets/calory.png";

const TrendingRecipeCard = ({
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
    <div>
      <div className="flex flex-col shadow-2xl  overflow-hidden mt-6 w-[320px] h-[324px] gap-4 text-xl  ">
        <img
          src={recipeimage}
          alt="user"
          className="h-1/2 w-full object-cover"
        />
        <div className="p-2">
          <p>{star}/5 </p>
          <h1 className="mb-8 text-wrap">{title}</h1>
          <div className="flex justify-between">
            <div className="flex gap-2">
              <img src={user} alt="" />
              <h1>{name}</h1>
            </div>
            <div className="bg-[#f0f8ff] mr-1 flex justify-between items-center gap-0 border-cyan-300  rounded-md  ">
              <img src={logo3} alt="" className="h-6 w-6" />
              <p> {cal} cals</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingRecipeCard;
