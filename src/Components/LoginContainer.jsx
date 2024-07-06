import React, { useState } from "react";

import image from "../assets/Loginpageimage.jpeg";
import { Form } from "react-router-dom";
import LoginPage from "./LoginPage";

const LoginContainer = () => {
  const [userName, setUserName] = useState("");
  return (
    <div className="w-85% mx-24 mt-12 flex gap-4 shadow-2xl p-4">
      <div className="w-1/2">
        <img src={image} alt="" />
      </div>
      <div>
        <LoginPage />
      </div>
    </div>
  );
};

export default LoginContainer;
