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

const LargeScreeenNavbar = ({
  currentColor,
  nameInitial,
}: {
  currentColor: string | undefined;
  nameInitial: string;
}) => {
  return (
    <Menubar className="border-none shadow-none ">
      <MenubarMenu>
        <div className="no-underline items-center gap-4 md:flex hidden  font-larsseit">
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
          <div className="flex items-center bg-[#EFF1F6] rounded-full pr-2 pl-1 ">
            <div className="w-9 h-9 flex items-center justify-center cursor-pointer bg-[#2D3B43] text-white rounded-full font-bold text-xl">
              {nameInitial}
            </div>

            <MenubarTrigger className="p-0">
              <NavButton
                title="Profile"
                color={currentColor}
                icon={<MdOutlineFormatLineSpacing />}
              />
            </MenubarTrigger>
          </div>
          <MenubarContent className="border-none rounded-md mr-12 mt-2 w-96">
            <UserProfile />
          </MenubarContent>
        </div>
      </MenubarMenu>
    </Menubar>
  );
};

export default LargeScreeenNavbar;
