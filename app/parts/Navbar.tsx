"use client";
import React, { FC, useState } from "react";
import Image from "next/image";
import { useStateContext } from "../context/contextProvider";

import { IoMdCloseCircle, IoMdMenu } from "react-icons/io";

import { logo } from "../../public";
import { navLinks } from "../../public/data";
import NavbarMenuBar from "./NavbarMenuBar";

import LargeScreeenNavbar from "./LargeScreeenNavbar";
import MobileScreenNavbar from "./MobileScreenNavbar";
import { getNameInitials, userURL } from "@/lib/constants";
import { UserProfileData } from "@/lib/types";
import useFetch from "@/hooks/useFetch";

interface NavbarProps {
  showComponent: string;
  setShowComponent: React.Dispatch<React.SetStateAction<string>>;
}

const Navbar: FC<NavbarProps> = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  const { handleClick, currentColor } = useStateContext();
  const { data } = useFetch<UserProfileData>(userURL);
  if (!data) return null;

  const nameInitial = getNameInitials(data.first_name, data.last_name);

  return (
    <div className="w-full relative">
      <nav
        className={`w-[95%] h-[66px] mt-1 mx-auto flex py-6 px-16 max-sm:px-10 justify-between items-center fixed navbar inset-x-0 bg-white backdrop-filter backdrop-blur-xl bg-opacity-1 z-50 rounded-full shadow-md`}
      >
        <div className="bank__image">
          <Image src={logo} alt="mainstack" className=" h-[40px]" />
        </div>
        <NavbarMenuBar handleClick={handleClick} />
        <LargeScreeenNavbar
          currentColor={currentColor}
          nameInitial={nameInitial}
        />

        <div className="md:hidden flex flex-1 justify-end items-center">
          <span className="text-4xl" onClick={() => setToggle(!toggle)}>
            {toggle ? <IoMdCloseCircle /> : <IoMdMenu />}
          </span>
          <div
            className={`${
              !toggle ? "hidden" : "block"
            } p-6 bg-white absolute top-20 right-0 mx-4 my-2 min-w-[260px] rounded-xl  sidebar shadow-2xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col py-5">
              {navLinks.map((nav, index) => {
                const IconComponent = nav.icons;
                return (
                  <li
                    key={nav.id}
                    className={`font-poppins font-light cursor-pointer text-[15px] ${
                      active === nav.title ? "text-white" : "text-dimWhite"
                    } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                    onClick={() => setActive(nav.title)}
                  >
                    <div className="flex gap-1 capitalize">
                      {React.cloneElement(IconComponent, {
                        className: "w-[20px] h-[20px] object-contain mr-2",
                      })}

                      {nav.title}
                    </div>
                  </li>
                );
              })}
            </ul>

            <MobileScreenNavbar
              currentColor={currentColor}
              nameInitial={nameInitial}
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
