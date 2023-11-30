import React from "react";
import UserProfile from "./userProfile";

import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import NavButton from "./NavButton";
import { MdOutlineFormatLineSpacing } from "react-icons/md";
import { BsChatLeftText } from "react-icons/bs";
import { IoNotificationsOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

const MobileScreenNavbar = ({
  currentColor,
  nameInitial,
}: {
  currentColor: string | undefined;
  nameInitial: string;
}) => {
  return (
    <Menubar className="border-none shadow-none ">
      <MenubarMenu>
        <div className="no-underline items-center md:flex   flex bg-[#EFF1F6] rounded-full px-2 py-1 gap-1 mt-4">
          <div className="w-10 h-10 flex items-center justify-center cursor-pointer bg-[#2D3B43] text-white rounded-full font-bold text-xl">
            {nameInitial}
          </div>

          <MenubarTrigger>
            <NavButton
              title="Profile"
              color={currentColor}
              icon={<RxHamburgerMenu />}
            />
          </MenubarTrigger>

          <NavButton
            title="Notifications"
            color={currentColor}
            icon={<IoNotificationsOutline />}
          />
          <NavButton
            title="Chat"
            color={currentColor}
            icon={<BsChatLeftText />}
          />
        </div>
        <MenubarContent className="border-none rounded-md mr-12 mt-2 w-96">
          <UserProfile />
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default MobileScreenNavbar;
