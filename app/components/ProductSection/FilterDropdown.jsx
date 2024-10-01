"use client"
import { DropdownIcon } from '@/public/assets/product/DropdownIcon';
import React, { FC, useState } from 'react';



const FilterDropdown = ({ options, initial }) => {
  const [isActive, setIsActive] = useState(false);
  const [activeText, setActiveText] = useState(initial);

  const handleActive = (val) => {
    setIsActive(false);
    setActiveText(val);
  };

  return (
    <div className="relative flex items-center gap-4 px-2">
      {/* Current selected value */}
      <div className="py-2">
        <p className="text-[#31546D] text-[1.6rem] font-bold">{activeText}</p>
      </div>

      {/* Dropdown button */}
      <div 
        onClick={() => setIsActive(!isActive)} 
        className="cursor-pointer"
      >
        <DropdownIcon />
      </div>

      {/* Dropdown menu */}
      <div 
        className={`absolute left-0 top-full z-10 w-max min-w-full bg-white flex flex-col gap-4 p-4 transition-all duration-500 ease-in-out ${isActive ? 'translate-y-0 opacity-100 visible' : 'translate-y-[-10px] opacity-0 invisible'}`}
      >
        {options.map((el, index) => (
          <p 
            onClick={() => handleActive(el)} 
            key={index} 
            className="cursor-pointer text-[#31546D] hover:text-blue-500"
          >
            {el}
          </p>
        ))}
      </div>
    </div>
  );
};

export default FilterDropdown;
