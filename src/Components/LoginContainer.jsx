import React, { useState } from "react";

import image from "../assets/Loginpageimage.jpeg";

import LoginPage from "./SignUpPage";

const LoginContainer = () => {
  const [userName, setUserName] = useState("");
  return (
    <div className="  mx-24 mb-8 flex justify-normal items-start gap-4 shadow-2xl p-4">
      <div className="flex gap-4">
        <img src={image} alt="image" className="w-1/2 h-auto object-cover" />

        <LoginPage />
      </div>
    </div>
  );
};

export default LoginContainer;
