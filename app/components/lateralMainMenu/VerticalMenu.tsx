"use client";

import { useState } from "react";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";

const VerticalMenu = () => {
  const [divWidth, setDivWidth] = useState("w-56");
  const [isBarLarge, setIsBarLarge] = useState(true);

  const openBar = () => {
    setDivWidth("w-56");
    setIsBarLarge(true);
  };
  const closeBar = () => {
    setDivWidth("w-25");
    setIsBarLarge(false);
  };

  return (
    <div
      className={`flex flex-col h-screen ${divWidth} bg-[#223458] text-white fixed top-0 left-0`}
    >
      <div className="flex justify-between">
        <div>logo</div>

        {isBarLarge && (
          <button
            className="hover:cursor-pointer text-white p-2 hover:text-blue-100"
            onClick={closeBar}
          >
            <IoIosArrowDropleft size={25} />
          </button>
        )}
      </div>
      <div>menu 1</div>
      <div>menu 2</div>
      <div>busca</div>
      <div>menu 3</div>
      {!isBarLarge && (
        <button
          className="fixed bottom-0 hover:cursor-pointer py-2 pl-15 text-white"
          onClick={openBar}
        >
          <IoIosArrowDropright size={25} />
        </button>
      )}
    </div>
  );
};
export default VerticalMenu;
