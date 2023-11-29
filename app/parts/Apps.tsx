import React from "react";
import { MdOutlineCancel } from "react-icons/md";

import Button from "./Button";

import Image from "next/image";
import { AppsData } from "../../public/data";

const Apps = () => {
  return (
    <div className="nav-item fixed right-1 top-20  md:right-40  bg-white dark:bg-[#42464D] p-2 rounded-lg shadow-md w-auto">
      <div className="flex justify-between items-center">
        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />
      </div>
      <div className="mt-2 ">
        {AppsData?.map((item, index) => (
          <div
            key={index}
            className="flex items-center cursor-pointer hover:bg-slate-200 pt-3  gap-2 border-b-1 border-color p-2"
          >
            <Image
              className="rounded-full h-10 w-10"
              src={item.image}
              alt={item.message}
            />
            <div>
              <p className="font-semibold dark:text-gray-200">{item.message}</p>
              <p className="text-gray-500 text-sm dark:text-gray-400">
                {" "}
                {item.desc}{" "}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apps;
