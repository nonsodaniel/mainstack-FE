"use client";
import { FC, useState } from "react";
import Image from "next/image";
import { useStateContext } from "../context/contextProvider";
import {
  MdChatBubbleOutline,
  MdNotificationsNone,
  MdOutlineFormatLineSpacing,
} from "react-icons/md";
import { IoMdCloseCircle, IoMdMenu } from "react-icons/io";
import UserProfile from "./userProfile";
import dynamic from "next/dynamic";

import { logo } from "../../public";
import { navLinks } from "../../public/data";
import MenuBar from "./MenuBar";

interface NavbarProps {
  showComponent: string;
  setShowComponent: React.Dispatch<React.SetStateAction<string>>;
}

const NavButton = dynamic(() => import("./NavButton"), { ssr: false });

const Navbar: FC<NavbarProps> = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  const { handleClick, isClicked, currentColor } = useStateContext();

  return (
    <div className="w-full">
      <nav
        className={`w-[95%] h-[66px] mt-1 mx-auto flex py-6 px-16 max-sm:px-10 justify-between items-center fixed navbar inset-x-0 bg-white backdrop-filter backdrop-blur-xl bg-opacity-1 z-50 rounded-full shadow-md`}
      >
        <div className="bank__image">
          <Image src={logo} alt="mainstack" className=" h-[40px]" />
        </div>
        <MenuBar handleClick={handleClick} />

        <div className="no-underline items-center gap-4 flex sm:hidden xs:hidden md:flex lg:flex font-larsseit">
          <NavButton
            title="Notifications"
            customFunc={() => handleClick("notification")}
            color={currentColor}
            icon={<MdNotificationsNone />}
          />
          <NavButton
            title="Chat"
            customFunc={() => handleClick("chat")}
            color={currentColor}
            icon={<MdChatBubbleOutline />}
          />
          <div className="flex bg-[#EFF1F6] rounded-full px-2 py-1 gap-1">
            <div className="w-10 h-10 flex items-center justify-center cursor-pointer bg-[#2D3B43] text-white rounded-full font-bold text-xl">
              AJ
            </div>
            <NavButton
              title="Profile"
              customFunc={() => handleClick("profile")}
              color={currentColor}
              icon={<MdOutlineFormatLineSpacing />}
            />
          </div>
        </div>

        <div className="md:hidden flex flex-1 justify-end items-center">
          <span className="text-4xl" onClick={() => setToggle(!toggle)}>
            {toggle ? <IoMdCloseCircle /> : <IoMdMenu />}
          </span>
          <div
            className={`${
              !toggle ? "hidden" : "block"
            } p-6 bg-white absolute top-20 right-0 mx-4 my-2 min-w-[260px] rounded-xl  sidebar shadow-2xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-light cursor-pointer text-[15px] ${
                    active === nav.title ? "text-white" : "text-dimWhite"
                  } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                  onClick={() => setActive(nav.title)}
                >
                  <div className="flex gap-1 capitalize">
                    <Image
                      src={nav.icons}
                      alt={nav.title}
                      className="w-[20px] h-[20px] object-contain mr-2"
                    />
                    {nav.title}
                  </div>
                </li>
              ))}
            </ul>
            <div className="no-underline items-center md:flex   flex bg-[#EFF1F6] rounded-full px-2 py-1 gap-1 mt-4">
              <div className="w-10 h-10 flex items-center justify-center cursor-pointer bg-[#2D3B43] text-white rounded-full font-bold text-xl">
                AJ
              </div>
              <NavButton
                title="Profile"
                customFunc={() => handleClick("profile")}
                color={currentColor}
                icon={<MdOutlineFormatLineSpacing />}
              />
              <NavButton
                title="Notifications"
                customFunc={() => handleClick("notification")}
                color={currentColor}
                icon={<MdNotificationsNone />}
              />
              <NavButton
                title="Chat"
                customFunc={() => handleClick("chat")}
                color={currentColor}
                icon={<MdChatBubbleOutline />}
              />
            </div>
          </div>
        </div>
      </nav>

      {isClicked?.profile && <UserProfile />}
    </div>
  );
};

export default Navbar;
