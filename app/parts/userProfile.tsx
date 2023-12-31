"use client";
import React from "react";

import { userProfileList } from "@/public/data";
import { userURL } from "@/lib/constants";
import { UserProfileData } from "@/lib/types";
import useFetch from "@/hooks/useFetch";

const UserProfile = () => {
  const { data } = useFetch<UserProfileData>(userURL);
  if (!data) return null;

  return (
    <>
      <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6 px-4">
        <div className="w-10 h-10 flex items-center justify-center cursor-pointer bg-[#2D3B43] text-white rounded-full font-bold text-xl mt-1">
          {data.first_name.split("")[0]} {data.last_name.split("")[0]}
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
            className="flex gap-3 border-b-1 border-color p-4 hover:bg-gray-100 cursor-pointer "
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
    </>
  );
};

export default UserProfile;
