import React from "react";
import { CiSearch } from "react-icons/ci";
import { BsChevronDown } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { filterCarData } from "../redux/slice/filterData";
const NavBar = ({ setCurrentPage }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex fixed top-0 mt-3 shadow-lg justify-start items-center gap-9 w-[98%] pt-2 px-5 rounded-2xl py-3 bg-[#f0ecec] mx-auto">
      <div className="flex justify-center items-start h-fit  pt-2 w-[300px]">
        <input
          onChange={(e) => {
            setCurrentPage(1);
            dispatch(filterCarData(e.target.value));
          }}
          placeholder="Search..."
          className="text-[15px] font-semibold outline-none pl-3 py-2 rounded-l-3xl w-full border-l-2 border-t border-b border-solid border-[#dad0d0]"
        />
        <div className="border-t border-b border-r-2 border-solid border-[#dad0d0] h-fit w-fit p-[11px] font-semibold rounded-r-3xl flex justify-center items-center bg-white">
          <CiSearch />
        </div>
      </div>
      <div className="flex justify-center items-center w-fit h-fit gap-2 mt-1">
        <p className="h-fit w-fit text-[#3b3737]">Relevance</p>

        <BsChevronDown className="mt-[3px] text-[12px] text-[#3b3737] font-semibold" />
      </div>
      <div className="flex justify-center items-center w-fit h-fit gap-2 mt-1">
        <p className="h-fit w-fit text-[#3b3737]">All brands</p>

        <BsChevronDown className="mt-[3px] text-[12px] text-[#3b3737] font-semibold" />
      </div>
    </div>
  );
};

export default NavBar;
