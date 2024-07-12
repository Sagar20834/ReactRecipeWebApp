// src/Components/RecipeDetail.js
import React, { useEffect, useState } from "react";
import Breadcrumb from "./Breadcrumb";
import { useParams } from "react-router-dom";
import CardData from "../CardData";
import { FaShareNodes, FaStarHalfStroke, FaUser } from "react-icons/fa6";
import {
  FaBookmark,
  FaCalendar,
  FaComment,
  FaNode,
  FaPrint,
  FaSave,
  FaShare,
  FaStar,
  FaTree,
} from "react-icons/fa";

const RecipeDetail = () => {
  const title = new URLSearchParams(location.search).get("name");
  const params = useParams();
  const [cardDatas, setCardDatas] = useState({ CardData });
  const [checkedIngredients, setCheckedIngredients] = useState([]);
  useEffect(() => {
    {
      CardData.map((data) => {
        if (title === data.title) {
          setCardDatas({
            cal: data.cal,
            calimage: data.calimage,
            name: data.name,
            username: data.name,
            servings: data.servings,
            cookinghour: data.cookinghour,
            cookingminute: data.cookingminute,
            prephour: data.prephour,
            prepminute: data.prepminute,
            cuisine: data.cuisine,
            collection: data.collection,
            ingredients: data.ingredients,
            instructions: data.instructions,
            star: data.star,
            title: data.title,
            userimage: data.userimage,
            description: data.description,
            steps: data.steps,
            recipeimage: data.image,
            category: data.category,
            id: data.id,
          });
        }
        return cardDatas;
      });
    }
  }, [title]);

  const handleCheckboxChange = (ingredient) => {
    setCheckedIngredients((prevCheckedIngredients) =>
      prevCheckedIngredients.includes(ingredient)
        ? prevCheckedIngredients.filter((item) => item !== ingredient)
        : [...prevCheckedIngredients, ingredient]
    );
  };
  //   console.log(title);
  //   console.log(params);
  return (
    <div className="container mx-auto px-8 ">
      <h1 className="text-xl font-bold">
        <Breadcrumb className="inline-block" />
      </h1>
      <div className="mt-4 ">
        <h1 className="text-5xl mb-4 max-w-[60%]">{cardDatas.title}</h1>
        <div className="flex flex-wrap gap-6 text-sm font-medium">
          <div className="flex  gap-2  items-center">
            <FaUser />
            <span>Author name</span>
          </div>
          <div className="flex gap-2  items-center">
            <FaCalendar />
            <span>July 22,2024</span>
          </div>
          <div className="flex gap-2  items-center">
            <FaComment />
            <span>22 Comments</span>
          </div>
          <div className="flex gap-2  items-center">
            <FaBookmark />
            <span>July 22,2024</span>
          </div>
          <div className="flex gap-2  items-center mr-12">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfStroke />
            <sup>4.0/10 reviews </sup>
          </div>
          <div className="flex justify-center mx-auto flex-wrap gap-32 ">
            <FaBookmark className="min-w-10 min-h-10  bg-[#E7EDE7] border rounded-md p-1 text-[#B66053]" />
            <FaShareNodes className="min-w-10 min-h-10  text-[#B66053]" />
          </div>
        </div>
      </div>
      <hr className="my-6" />
      <div>
        <div className=" leftside max-w-[65%]">
          <img
            className="w-full max-h-[456px] object-cover border-2 border-violet-100 mb-9"
            src={cardDatas.recipeimage}
            alt="Recipe image"
          />
          <div className="flex gap-4 justify-around mx-16 mb-6">
            <div>
              <h1 className="font-bold text-gray-400">Prep. Time :</h1>
              <span className="font-bold">20 minutes</span>
            </div>
            <div className="h-12 w-1 bg-gray-200"></div>
            <div>
              <h1 className="font-bold text-gray-400">Cook Time :</h1>
              <span className="font-bold">5 minutes</span>
            </div>
            <div className="h-12 w-1 bg-gray-200"></div>
            <div>
              <h1 className="font-bold text-gray-400">Servings :</h1>
              <span className="font-bold">20 minutes</span>
            </div>
            <div className="flex justify-center items-center">
              <button className="flex items-center gap-2 text-[#B66053] border-2 p-2 rounded-md border-[#B66053]">
                {" "}
                <FaPrint /> Print Recipe
              </button>
            </div>
          </div>
          <h1 className="font-medium text-sm mb-4">{cardDatas.description} </h1>
          <h1 className="text-4xl mb-4">Ingredients : </h1>
          <ul className="list-none ">
            {console.log(cardDatas.ingredients)}
            {cardDatas.ingredients
              ? cardDatas.ingredients.map((ingredient, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-4 font-bold text-lg mb-2 cursor-pointer w-3/4"
                  >
                    <input
                      className="accent-[#B66053] w-5 h-5 border rounded-lg cursor-pointer"
                      type="checkbox"
                      checked={checkedIngredients.includes(ingredient.name)}
                      onChange={() => handleCheckboxChange(ingredient.name)}
                    />
                    <span
                      onClick={() => handleCheckboxChange(ingredient.name)}
                      className={
                        checkedIngredients.includes(ingredient.name)
                          ? "line-through text-gray-400"
                          : ""
                      }
                    >
                      {ingredient.name}
                    </span>
                  </li>
                ))
              : "Loading ingredients..."}
          </ul>

          <h1 className="text-4xl mb-4">Instructions : </h1>
          <ol className="text-lg ">
            {cardDatas.instructions
              ? cardDatas.instructions.map((instruction, i) => (
                  <li key={i} className="  flex items-start gap-4 mb-6">
                    <span className="bg-[#B66053] text-white rounded-md min-w-6 min-h-6 flex items-center justify-center">
                      {i + 1}
                    </span>
                    <span className="font-medium text-base">
                      {instruction.text}
                    </span>
                  </li>
                ))
              : "Loading instructions..."}
          </ol>
        </div>
        <div className="rightside"></div>
      </div>
    </div>
  );
};

export default RecipeDetail;
