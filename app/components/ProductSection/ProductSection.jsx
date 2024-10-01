import React from 'react';
import ProductCard from './ProductCard';
import img from '@/public/assets/product/product.png';
import FilterDropdown from './FilterDropdown';

export const FilterOptions = ["Most Liked", "New", "Another Filter"];
export const Products = [
  { id: 1, name: "Crystal Agate Phone Grip", price: "18.99$", img: img },
  { id: 2, name: "Crystal Agate Phone Grip", price: "18.99$", img: img },
  { id: 3, name: "Crystal Agate Phone Grip", price: "18.99$", img: img },
  { id: 4, name: "Crystal Agate Phone Grip", price: "18.99$", img: img },
  { id: 5, name: "Crystal Agate Phone Grip", price: "18.99$", img: img },
  { id: 6, name: "Crystal Agate Phone Grip", price: "18.99$", img: img },
  { id: 7, name: "Crystal Agate Phone Grip", price: "18.99$", img: img },
  { id: 8, name: "Crystal Agate Phone Grip", price: "18.99$", img: img },
];

const ProductsSection = () => {
  return (
    <section className="w-full min-h-screen py-12 flex flex-col items-center gap-12 bg-white">
      {/* Title Section */}
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-4xl font-bold text-[#31546D] text-center">All Products</h2>
        <hr className="w-20 h-1 bg-gray-300 border-none" />
      </div>

      {/* Filter Section */}
      <div className="w-full flex flex-col px-[5%] gap-12 mt-4">
        <div className="w-full flex justify-end gap-12">
          <div className="flex items-center">
            <span className="text-gray-500 font-semibold text-lg ">Filter:</span>
            <FilterDropdown initial="All Products" options={FilterOptions} />
          </div>
          <div className="flex items-center">
            <span className="text-gray-500 font-semibold text-lg">Filter:</span>
            <FilterDropdown initial="All Products" options={FilterOptions} />
          </div>
        </div>

        {/* Product Items Section */}
        <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-44 gap-y-10">
          {Products.map((product, index) => (
            <ProductCard
              key={index}
              id={product.id}
              img={product.img}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>

        {/* Footer Section */}
        <div className="mt-8 self-center">
          <button className="px-14 py-4 text-center text-[1.4rem] font-bold rounded-[18px] transition-all duration-500 ease-in-out bg-white text-[#6FB4FF] border-2 border-[#6FB4FF] hover:bg-gradient-to-r hover:from-[#75CCEB] hover:to-[#6FB4FF] hover:text-white hover:shadow-lg">
            View all
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
