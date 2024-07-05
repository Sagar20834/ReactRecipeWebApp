import React from "react";
import Receipeimage from "../assets/Receipeimage.jpg";

const ShareRecipe = () => {
  return (
    <>
      <div className="mt-24 flex justify-around items-center min-h-80 ">
        <img src={Receipeimage} alt="recipeimage" className="grow" />
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className=" text-5xl font-bold">
            Share Your <span className=" text-[#B66053]"> Receipes </span>
          </h1>
          <p className="text-[18px] font-bold text-[#898992] ml-36">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            repellat eos fuga dicta. Harum ipsa quia impedit quisquam quasi
            architecto.
          </p>
          <button className=" bg-[#B66053] min-w-36 min-h-12   rounded-lg my-5 text-white m-auto p-4">
            Create New Recipe
          </button>
        </div>
      </div>
    </>
  );
};

export default ShareRecipe;
