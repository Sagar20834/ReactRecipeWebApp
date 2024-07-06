import React, { useState } from "react";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";

const LoginPage = () => {
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
    repassword: "",
    checkboxterm: false,
  });

  const validate = (input) => {
    if (input.username === "") alert("Please enter a username");
    else if (input.email === "") alert("Please enter the email");
    else if (input.password === "") alert("Please enter the password");
    else if (input.password.length < 8)
      alert("Password should be at least 8 characters long");
    else if (input.password !== input.repassword)
      alert("Passwords do not match");
    else if (!input.checkboxterm)
      alert("Please agree to the terms and conditions");
    else {
      setSavedData([...savedData, input]);
      localStorage.setItem("user", JSON.stringify([...savedData, input]));
      setInput({
        username: "",
        email: "",
        password: "",
        repassword: "",
        checkboxterm: false,
      });
    }
  };

  const initial = localStorage.getItem("user");
  const [savedData, setSavedData] = useState(() => {
    return localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : [];
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    console.log(name, value, type, checked);
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate(input);
  };

  return (
    <div className="flex  flex-col justify-between  md:w-[480px]">
      <form className="items-center max-w-full" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold mb-8"> Welcome to Join our Family</h1>

        <div className="relative flex justify-start items-center border-b-[1px]">
          <FaUser className="w-6 h-6 absolute pointer-events-none" />
          <input
            className="h-12 w-90 ml-4 rounded w-full py-2 px-3 text-black font-semibold leading-tight focus:outline-none focus:border-b-2 focus:border-[#B66053]"
            type="text"
            name="username"
            id="username"
            placeholder="Enter the Username"
            value={input.username}
            onChange={handleChange}
          />
        </div>
        <div className="relative flex justify-start items-center border-b-[1px]">
          <FaEnvelope className="w-6 h-6 absolute pointer-events-none" />
          <input
            className="h-12 w-90 ml-4 rounded w-full py-2 px-3 text-black font-semibold leading-tight focus:outline-none focus:border-b-2 focus:border-[#B66053]"
            type="email"
            name="email"
            id="useremail"
            placeholder="Enter the Email Address"
            value={input.email}
            onChange={handleChange}
          />
        </div>
        <div className="relative flex justify-start items-center border-b-[1px]">
          <FaLock className="w-6 h-6 absolute pointer-events-none" />
          <input
            className="h-12 w-90 ml-4 rounded w-full py-2 px-3 text-black font-semibold leading-tight focus:outline-none focus:border-b-2 focus:border-[#B66053]"
            type="password"
            name="password"
            id="password"
            placeholder="Enter the Password"
            value={input.password}
            onChange={handleChange}
          />
        </div>
        <div className="relative flex justify-start items-center border-b-[1px]">
          <FaLock className="w-6 h-6 absolute pointer-events-none" />
          <input
            className="h-12 w-90 ml-4 rounded w-full py-2 px-3 text-black font-semibold leading-tight focus:outline-none focus:border-b-2 focus:border-[#B66053]"
            type="password"
            name="repassword"
            id="repassword"
            placeholder="Re-Enter the Password"
            value={input.repassword}
            onChange={handleChange}
          />
        </div>

        <label className="md:w-2/3 block text-gray-500 font-bold">
          <input
            className="mr-2 mt-8 leading-tight accent-[#B66053]"
            type="checkbox"
            name="checkboxterm"
            checked={input.checkboxterm}
            onChange={handleChange}
          />
          <span className="text-sm">I agree to terms and policy</span>
        </label>

        <div className="flex gap-5 shrink min-h-9 my-8">
          <button
            type="submit"
            className="bg-[#B66053] min-w-32 rounded-lg text-white hover:scale-110"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
