import React, { useState } from "react";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

const BottonNavBar = ({
  indexOfLastItem,
  carData,
  currentPage,
  setCurrentPage,
  itemsPerPage,
  options,
}) => {
  return (
    <div className="flex fixed bottom-0 shadow-lg justify-between my-3 items-center gap-9 w-[98%] pt-2 px-5 rounded-2xl py-3 bg-[#f0ecec] mx-auto">
      <div className="flex gap-3 justify-between items-center">
        <span className="font-semibold text-[#3c3b3b] ">
          {currentPage} of {parseInt(carData.length / itemsPerPage) + 1}
        </span>
      </div>
      <div className="flex gap-3 justify-center items-center">
        <div className="flex justify-center items-center gap-3">
          <button
            className="p-3 rounded-full border border-solid border-gray-500 bg-[white] text-[#3c3b3b] cursor-pointer"
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <FiArrowLeft />
          </button>
          <button
            className="p-3 rounded-full border border-solid border-gray-500 bg-[white] text-[#3c3b3b] cursor-pointer"
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={indexOfLastItem >= carData.length}
          >
            <FiArrowRight />
          </button>
        </div>
        <select className="px-4 py-2 rounded-md border border-solid border-gray-500 bg-[white] text-[#3c3b3b] cursor-pointer">
          {options}
        </select>
      </div>
    </div>
  );
};

export default BottonNavBar;
