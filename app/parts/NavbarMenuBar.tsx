"use client";

import React, { useState } from "react";

import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { SlArrowDown } from "react-icons/sl";
import { AppsData, navLinks } from "../../public/data";
import Image from "next/image";

const NavbarMenuBar = ({ handleClick }: any) => {
  const [isAppsClicked, setIsAppsClicked] = useState(false);
  return (
    <Menubar className="border-none shadow-none">
      <MenubarMenu>
        <ul className="list-none flex sm:hidden xs:hidden md:flex lg:flex items-center">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-normal cursor-pointer hover:bg-[#EFF1F6]
             rounded-full py-2 px-3  text-[14px] 
             ${
               nav.title === "Revenue" &&
               "bg-black text-white hover:bg-black hover:text-white"
             } 
              ${
                isAppsClicked &&
                nav.title === "Apps" &&
                "bg-black text-white hover:bg-black hover:text-white "
              } 
               ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}  mr-10`}
              onClick={() => {
                if (nav.title === "Apps") {
                  setIsAppsClicked(!isAppsClicked);
                }
              }}
              onMouseLeave={() => handleClick("")}
            >
              {nav.title === "Apps" ? (
                <MenubarTrigger
                  className={`${
                    isAppsClicked &&
                    nav.title === "Apps" &&
                    "focus:bg-black focus:text-white "
                  } `}
                >
                  <div className="flex items-center gap-1 ">
                    {nav.icons}
                    <span>{nav.title}</span>
                    {isAppsClicked && (
                      <div className="flex items-center gap-2 mx-3">
                        <span>Links In Bio</span>
                        <span>
                          <SlArrowDown />
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-1"></div>
                </MenubarTrigger>
              ) : (
                <div className="flex items-center gap-1">
                  <span> {nav.icons}</span>

                  <span>{nav.title}</span>
                </div>
              )}
            </li>
          ))}
          <>
            <MenubarContent
              style={{ width: "26rem", marginTop: "1.5rem" }}
              className="nonso border-none rounded-md"
            >
              {AppsData?.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center cursor-pointer hover:shadow-md hover:rounded-md  gap-2  border-color px-4 py-5 mx-2"
                >
                  <div className="border border-gray-200 rounded-md">
                    <Image
                      className="rounded-full h-10 w-10"
                      src={item.image}
                      alt={item.message}
                    />
                  </div>

                  <div>
                    <p className="font-semibold dark:text-gray-200">
                      {item.message}
                    </p>
                    <p className="text-gray-500 font-light text-sm dark:text-gray-400">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </MenubarContent>
          </>
        </ul>
      </MenubarMenu>
    </Menubar>
  );
};

export default NavbarMenuBar;
