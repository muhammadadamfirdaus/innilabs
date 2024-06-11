import React, { useState } from "react";
import { HiOutlineBars3, HiOutlineDeviceTablet, HiXMark } from "react-icons/hi2";

function Menu() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
      <div className="flex items-center justify-end lg:hidden">
        <HiOutlineBars3 onClick={() => setToggleMenu(!toggleMenu)} className={`${toggleMenu ? "hidden" : "block"}`} size={24} />
      </div>
      <div className={`bg-white text-black fixed top-0 left-0 w-full h-full lg:bg-transparent lg:text-inherit lg:relative ${toggleMenu ? "block" : "hidden"} lg:block`}>
        <ul className="py-4 lg:flex">
          <li className="flex px-4 justify-end lg:hidden">
            <span className="flex items-center py-4 basis-8" onClick={() => setToggleMenu(!toggleMenu)}>
              <HiXMark />
            </span>
          </li>
          <li className="flex px-4">
            <span className="flex items-center ml-8 mb-8 lg:mb-0 text-base">Home</span>
          </li>
          <li className="flex px-4">
            <span className="flex items-center ml-8 mb-8 lg:mb-0 text-base">About Us</span>
          </li>
          <li className="flex px-4">
            <span className="flex items-center ml-8 mb-8 lg:mb-0 text-base">Solutions</span>
          </li>
          <li className="flex px-4 lg:pr-0">
            <span className="flex items-center ml-8 mb-8 lg:mb-0 text-base">Contact</span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Menu;
