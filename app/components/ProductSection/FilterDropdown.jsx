"use client";
import { DropdownIcon } from '@/public/assets/product/DropdownIcon';
import React, { useState } from 'react';

const FilterDropdown = ({ options, initial }) => {
  const [isActive, setIsActive] = useState(false);
  const [activeText, setActiveText] = useState(initial);

  const handleActive = (val) => {
    setIsActive(false);
    setActiveText(val);
  };

  return (
    <div className="relative flex items-center gap-4 px-4 py-2 bg-white shadow-lg rounded-lg cursor-pointer">
  <div>
    <p className="text-[#31546D] text-[1.4rem] font-semibold">{activeText}</p>
  </div>

  <div onClick={() => setIsActive(!isActive)} className="cursor-pointer">
    <DropdownIcon />
  </div>

  <div
    className={`absolute left-0 top-full mt-2 z-10 w-max min-w-full bg-white rounded-md shadow-md p-4 transition-all duration-300 ease-in-out ${
      isActive ? 'translate-y-0 opacity-100 visible' : 'translate-y-[-10px] opacity-0 invisible'
    }`}
  >
    {options.map((el, index) => (
      <p
        onClick={() => handleActive(el)}
        key={index}
        className="cursor-pointer text-[#31546D] hover:text-blue-500 transition-colors"
      >
        {el}
      </p>
    ))}
  </div>
</div>

  );
};

export default FilterDropdown;
