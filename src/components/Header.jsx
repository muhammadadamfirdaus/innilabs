import React from "react";
import Innilabs from "/brand/innilabs-logo.png";
import Menu from "./Menu";

function Header() {
  return (
    <div className="flex justify-between items-center px-4 md:px-8">
      <div className="logo pt-2">
        <img src={Innilabs} className="h-10" alt="Innilabs Logo" />
      </div>
      <div className="menu">
        <Menu />
      </div>
    </div>
  );
}

export default Header;
