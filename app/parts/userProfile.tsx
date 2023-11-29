"use client";
import React from "react";
import { MdOutlineCancel } from "react-icons/md";

import Button from "./Button";
import { userProfileData } from "@/public/data";
import { useStateContext } from "../context/contextProvider";

const UserProfile = () => {
  const { currentColor } = useStateContext();

  return (
    <div className="nav-item fixed right-1 top-20  bg-white  p-4  w-96 z-50  max-w-[320px] rounded-xl  sidebar shadow-2xl">
      <div className="flex justify-between items-center">
        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />
      </div>
      <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
        <div className="w-10 h-10 flex items-center justify-center cursor-pointer bg-[#2D3B43] text-white rounded-full font-bold text-xl">
          AJ
        </div>
        <div>
          <p className="font-semibold text-md dark:text-gray-200">
            {" "}
            Anoja Jane{" "}
          </p>
          <p className="text-gray-500 text-sm font-semibold dark:text-gray-400">
            {" "}
            info@user.com{" "}
          </p>
        </div>
      </div>
      <div>
        {userProfileData.map((item, index) => (
          <div
            key={index}
            className="flex gap-3 border-b-1 border-color p-4 hover:bg-gray-500 cursor-pointer "
          >
            <button
              type="button"
              className="  rounded-lg p-1  hover:bg-light-gray"
            >
              {item.icon}
            </button>

            <div>
              <p className=" dark:text-gray-200 ">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProfile;
