import React from "react";
import nescafe from "../assets/nescafe.svg";

const Clients = () => {
  return (
    <div className="mx-32 my-48">
      <div className=" flex justify-between max-h-18 gap-4">
        <img src={nescafe} alt="nescafe1" className="h-16  w-16" />
        <img src={nescafe} alt="nescafe2" className="h-16  w-16" />
        <img src={nescafe} alt="nescafe3" className="h-16  w-16" />
        <img src={nescafe} alt="nescafe4" className="h-16  w-16" />
        <img src={nescafe} alt="nescafe5" className="h-16  w-16" />
        <img src={nescafe} alt="nescafe6" className="h-16  w-16" />
        <img src={nescafe} alt="nescafe7" className="h-16  w-16" />
      </div>
    </div>
  );
};

export default Clients;
