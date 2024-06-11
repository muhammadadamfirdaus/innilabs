import React from "react";
import Header from "../Header";

function Section1() {
  return (
    <div className="section section-1">
      <Header />
      <div className="h-full flex justify-center items-center">
        <div className="max-w-3xl text-center">
          <h1 className="font-bold px-4 text-4xl lg:text-5xl">
            IT Systems for <span className="clip-text">Financial</span> Services
          </h1>
          <p className="text-opacity-75 text-lg px-4 mt-5">Developing customized software solutions to streamline operations and enhance customer experience in the finance industry.</p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
