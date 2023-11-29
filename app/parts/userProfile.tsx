"use client";
import React from "react";
import { MdOutlineCancel } from "react-icons/md";

import Button from "./Button";
import { userProfileList } from "@/public/data";
import { userURL } from "@/lib/constants";
import { UserProfileData } from "@/lib/types";
import useFetch from "@/hooks/useFetch";

const UserProfile = () => {
  const { data, loading, error } = useFetch<UserProfileData>(userURL);
  if (!data) return null;

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
        <div className="w-10 h-10 flex items-center justify-center cursor-pointer bg-[#2D3B43] text-white rounded-full font-bold text-xl mt-1">
          AJ
        </div>
        <div>
          <p className="font-semibold text-sm dark:text-gray-200">
            {data.first_name} {data.last_name}
          </p>
          <p className="text-gray-500 text-xs font-semibold dark:text-gray-400">
            {data.email}
          </p>
        </div>
      </div>
      <div>
        {userProfileList.map((item, index) => (
          <div
            key={index}
            className="flex gap-3 border-b-1 border-color p-4 hover:bg-gray-500 cursor-pointer "
            data-testid={`nav-container-${index}`}
          >
            <button
              type="button"
              className="  rounded-lg p-1  hover:bg-light-gray"
              data-testid={`nav-icon-${index}`}
            >
              {item.icon}
            </button>

            <div>
              <p
                className=" dark:text-gray-200"
                data-testid={`nav-title-${index}`}
              >
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProfile;
