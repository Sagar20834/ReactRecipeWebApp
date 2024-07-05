import React from "react";
import logocorss from "../assets/logocross.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="flex gap-3 justify-between items-center  min-h-24 min-w-max mx-16 mt-8 ">
        <Link to={"/"}>
          <div className="flex">
            <img src={logocorss} alt="logo" />
            <p className=" text-4xl font-bold">
              Perfect<span className=" text-[#B66053] ">Receipe</span>
            </p>
          </div>
        </Link>
        <div>
          <ul className="flex gap-8 font-bold ">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/recipe"}>Recipe</Link>
            </li>
            <li>
              <Link to={"/add-recipe"}>Add Recipe</Link>
            </li>
            <li>
              <Link to={"blog"}>Blog </Link>
            </li>
            <li>
              <Link to={"about-us"}>About Us </Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-5 shrink min-h-9 ">
          <button className="bg-[#E7EDE7]  min-w-32 rounded-lg">login</button>
          <button className="bg-[#B66053] min-w-32  rounded-lg text-white ">
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
