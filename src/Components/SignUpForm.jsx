import React from "react";
import { useForm } from "react-hook-form";
import logocorss from "../assets/logocross.svg";
import {
  FaEnvelope,
  FaFacebook,
  FaGoogle,
  FaLock,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = (e) => {
    console.log("data submitted", e);
  };
  return (
    <>
      <div className="flex  flex-col justify-between  md:w-[480px]">
        <form
          className="items-center max-w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="text-2xl font-bold mb-8">
            {" "}
            Welcome to Join our Family
          </h1>

          <div className=" relative  border-b-[1px] flex items-center   focus-within:border-b-2 focus-within:border-[#B66053]">
            <FaUser className="w-6 h-6 absolute pointer-events-none text-gray-200" />
            <input
              className="h-12 w-90 ml-6 rounded w-full py-2 px-3 text-black font-medium leading-tight focus:outline-none  "
              type="text"
              {...register("username", {
                required: true,
                maxLength: 25,
                minLength: 8,
              })}
              aria-invalid={errors.username ? "true" : "false"}
              placeholder="Enter the Username"
            />
            {errors.username?.type === "required" && (
              <p className=" absolute top-2 -right-8 text-red-600">
                *First name is required
              </p>
            )}

            {errors.username?.type === "maxLength" && (
              <p role="alert" className=" absolute top-2 -right-8 text-red-600">
                *Max Length is 25
              </p>
            )}

            {errors.username?.type === "minLength" && (
              <p role="alert" className=" absolute top-2 -right-8 text-red-600">
                *Min Length is 8
              </p>
            )}
          </div>

          <div className="border-b-[1px] flex items-center   focus-within:border-b-2 focus-within:border-[#B66053]">
            <FaEnvelope className="w-6 h-6 absolute pointer-events-none text-gray-200" />
            <input
              className="h-12 w-90 ml-6 rounded w-full py-2 px-3 text-black font-medium leading-tight focus:outline-none "
              type="email"
              placeholder="Enter the Email Address"
              {...register("email")}
            />
          </div>
          <div className="border-b-[1px] flex items-center   focus-within:border-b-2 focus-within:border-[#B66053]">
            <FaLock className="w-6 h-6 absolute pointer-events-none text-gray-200" />
            <input
              className="h-12 w-90 ml-6 rounded w-full py-2 px-3 text-black font-medium leading-tight focus:outline-none"
              type="password"
              placeholder="Enter the Password"
              {...register("password")}
            />
          </div>
          <div className="border-b-[1px] flex items-center   focus-within:border-b-2 focus-within:border-[#B66053]">
            <FaLock className="w-6 h-6 absolute pointer-events-none text-gray-200" />
            <input
              className="h-12 w-90 ml-6 rounded w-full py-2 px-3 text-black font-medium leading-tight focus:outline-none "
              type="password"
              placeholder="Re-Enter the Password"
              {...register("repassword")}
            />
          </div>

          <label className="md:w-2/3 block text-gray-500 font-bold">
            <input
              className="mr-2 mt-8 leading-tight accent-[#B66053]"
              type="checkbox"
              {...register("username")}
            />
            <span className="text-sm">I agree to terms and policy</span>
          </label>

          <div className="flex gap-5 shrink min-h-9 my-4">
            <button
              type="submit"
              className="bg-[#B66053] min-w-32 rounded-lg text-white hover:scale-110"
            >
              Sign Up
            </button>
          </div>
        </form>
        <p>Or You can join with </p>
        <div className="flex gap-5 justify-around mt-2">
          <div className="flex justify-center items-center gap-2 border-2 border-gray-400 rounded p-2 w-1/2">
            <FaGoogle />
            <p>Sign in with Google</p>
          </div>
          <div className="flex justify-center items-center gap-2 border-2 border-gray-400 rounded p-2 w-1/2">
            <FaFacebook />
            <p>Sign in with Google</p>
          </div>
        </div>
        <p className="mt-4">
          Already have an account
          <Link to={"/login"} className="text-[#B66053] ml-2">
            Log in
          </Link>
        </p>
        <div className="flex justify-end">
          <img src={logocorss} alt="logo" />
          <p className=" text-2xl font-bold">
            Perfect<span className=" text-[#B66053] ">Receipe</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
