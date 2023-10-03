import React from "react";
import { IoPersonOutline,IoCarSportSharp } from "react-icons/io5";
import { BsSpeedometer2 } from "react-icons/bs";
import { GiSteeringWheel } from "react-icons/gi";
import { AiOutlineHeart } from "react-icons/ai";


const Card = ({ name, price, url, capacity, fuel, type, year, driveType }) => {

  return (
    <div className="h-[400px] w-[500px] rounded-md p-3 bg-[#f8f6f6] shadow-md">
      <div className="w-[99%] h-[200px] mx-auto flex items-center justify-center ">
        <img
          src={url}
          className="object-cover w-full h-full rounded-xl"
          alt="Image"
        />
      </div>
      <div className="w-full flex px-2 justify-between items-center mt-3">
        <p className="font-semibold text-[23px] text-[#302e2e]">{name}</p>
        <div className="px-3 py-1 border-2 border-dashed border-blue-400 rounded-2xl">
          {year}
        </div>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-y-2 w-[90%] px-2 mt-2 justify-start">
        <div className="flex justify-start items-center gap-1 ">
          <IoPersonOutline className="text-blue-600" />
          <p className="text-[#1e1d1d]">{capacity} People</p>
        </div>
        <div className="flex justify-start items-center gap-1">
          <IoCarSportSharp className="text-blue-600" />
          <p className="text-[#1e1d1d]">{type}</p>
        </div>
        <div className="flex justify-start items-center gap-1">
          <BsSpeedometer2 className="text-blue-600" />
          <p className="text-[#1e1d1d]">{fuel / 10}km / 1-Litre</p>
        </div>
        <div className="flex justify-start items-center gap-1">
          <GiSteeringWheel className="text-blue-600" />
          <p className="text-[#1e1d1d]">{driveType}</p>
        </div>
      </div>
      <div className="w-[100%] h-[1px] mt-3 bg-[#cbc5c5] my-3"></div>
      <div className="w-[96%] mx-auto flex justify-between items-center">
        <p className="flex justify-center items-center w-fit gap-2">
          <p className="font-semibold text-[21px] text-[#2b2929]">${price} </p>
          <p className="text-[15px] text-[#2b2929]">/month</p>
        </p>
        <div className="flex justify-center items-center h-fit w-fit gap-2">
          <div className="p-[8px] cursor-pointer rounded-md text-[19px] text-blue-600 bg-gray-200 h-fit w-fit">
            <AiOutlineHeart />
          </div>
          <div

            className="flex justify-center items-center text-[13px] font-semibold bg-blue-500 cursor-pointer text-white rounded-md px-3 py-[6px]"
          >
            Rent now
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
