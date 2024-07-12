import React from "react";
import {
  FaCopyright,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaTiktok,
} from "react-icons/fa";
import logocross from "../assets/logocross.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="min-h-80 max-w-100% bg-[#E5E5E5] mt-8">
      <div>
        <div className="main-footer ">
          <div className="first-part flex  justify-center items-center mx-28">
            <div className="w-1/3 p-8">
              <div className="flex  justify-start items-start ">
                <img src={logocross} alt="icon" className="" />
                <p className=" text-4xl font-bold">
                  Perfect<span className=" text-[#A17F74] ">Receipe</span>
                </p>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
                atque voluptatibus praesentium iure asperiores aspernatur
                perspiciatis mollitia harum qui quasi! Distinctio, quidem.
                Asperiores, quos fugit.
              </p>
            </div>
            <div className="w-1/3 flex justify-start items-start gap-4">
              <div className="flex flex-col ">
                <p className="font-bold">Quick Links</p>
                <Link to={"/"}>Home</Link>
                <Link to={"/recipe"}>Recipes</Link>
                <Link to={"/blog"}>Blog</Link>
              </div>
              <div className="flex flex-col">
                <p className="font-bold">Quick Links</p>
                <Link to={"/"}>Share Recipe</Link>
                <Link to={"/"}>About Us</Link>
                <Link to={"/"}>Contact</Link>
              </div>
              <div className="flex flex-col">
                <p className="font-bold">Legal</p>
                <Link to={"/"}>Terms of Use</Link>
                <Link to={"/"}>Privacy and cookies</Link>
              </div>
            </div>
            <div className="w-1/3 flex flex-col  justify-center items-center pt-16 ">
              <h1 className="text-2xl font-bold">Newsletter</h1>
              <p className="font-medium">
                Subscribe to our newsletter to get more free tips
              </p>
              <input
                type="email"
                name="email"
                id="email"
                placeholder=" Enter Your Email "
                className="h-10 min-w-[23rem] rounded-md mt-5"
              />
              <button className="bg-[#B26357]   h-10 min-w-[23rem] mt-5 rounded-lg   text-white ">
                Subscribe
              </button>
            </div>
          </div>
          <hr className="h-px  bg-gray-200 border-0 dark:bg-gray-700 mt-12" />
          <div className="flex justify-between items-end mx-28">
            <div>
              <p className="flex justify-center items-center my-6">
                <FaCopyright /> 2024 All rights reserved.
              </p>
            </div>
            <div className="flex justify-between items-center gap-10 my-6">
              <Link to={"/"}>
                <FaInstagram size="24px" />
              </Link>
              <Link to={"/"}>
                <FaFacebook size="24px" />
              </Link>
              <Link to={"/"}>
                <FaTwitter size="24px" />
              </Link>
              <Link to={"/"}>
                <FaTiktok size="24px" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
