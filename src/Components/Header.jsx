import React from "react";
import logocorss from "../assets/logocross.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="flex gap-3 justify-between items-center  max-h-24 max-w-[1340px] mx-16 my-8 ">
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
        <Link to={"/login"}>
          <div className="flex gap-5 shrink min-h-9 ">
            <button className="bg-[#E7EDE7]  min-w-32 rounded-lg hover:scale-110	">
              login
            </button>
          </div>
        </Link>
        <Link to={"/signup"}>
          <div className="flex gap-5 shrink min-h-9">
            <button className="bg-[#B66053] min-w-32  rounded-lg text-white hover:scale-110">
              Sign Up
            </button>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Header;
