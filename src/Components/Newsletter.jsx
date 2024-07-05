import React from "react";

const Newsletter = () => {
  return (
    <div className="my-24 bg-[#FFF0ED]  min-h-[335px] flex  flex-col justify-center items-center gap-6 ">
      <h1 className=" text-5xl font-bold">let's Stay in Touch !</h1>
      <p className=" text-[18px] font-bold text-[#898992] ">
        Join our newsletter, so that we reach out to you with our news and
        offers
      </p>
      <div className=" flex justify-center items-center gap-4 ">
        <input
          type="email"
          name="email"
          id="email"
          placeholder=" Enter Your Email "
          className="h-10 min-w-[23rem] rounded-md"
        />
        <button className="bg-[#B26357] min-w-36 min-h-12   rounded-lg my-5 text-white m-auto">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
