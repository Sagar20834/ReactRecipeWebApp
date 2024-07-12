import React from "react";
import user from "../assets/user.svg";
import logo3 from "../assets/calory.png";
import { Link } from "react-router-dom";

const RecipeCard = ({
  id,
  star,
  title,
  image,
  calimage,
  userimage,
  name,
  cal,
}) => {
  return (
    <Link to={`/recipe-detail?name=${title}`}>
      <div className="flex flex-col shadow-2xl  overflow-hidden mt-6 min-w-[320px] min-h-[352px] gap-4 text-xl  ">
        <img src={image} alt="user" className="h-[164px] w-full object-cover" />
        <div className="p-2 ">
          <p>{star}/5 </p>
          <h1 className="mb-8 text-wrap max-w-[320px]">{title}</h1>
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
    </Link>
  );
};

export default RecipeCard;
