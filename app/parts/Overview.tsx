"use client";
import React from "react";
import Charts from "./Charts";

const Overview = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="border-r-1 border-color mx-2  w-full">
        <div className="flex flex-row flex-wrap justify-between lg:justify-start item-center ">
          <div className="pr-4 lg:pr-20">
            <span className=" text-[20px] lg:text-[36px] font-bold">
              USD 12,5000.00
            </span>
          </div>

          <div className="">
            <button className="px-5 py-2 lg:px-12 lg:py-4  text-sm lg:text-lg bg-black text-white  rounded-full">
              Withdraw
            </button>
          </div>
        </div>

        <div className=" w-full  border-l-2 border-gray-200">
          <Charts />
        </div>
      </div>
    </div>
  );
};

export default Overview;
