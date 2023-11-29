import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FaFolder } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { FaShare } from "react-icons/fa6";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";

const Sidebar = () => {
  return (
    <div className="hidden lg:flex flex-col items-center gap-5 p-3 fixed left-10 top-[50%] bottom-3rem rounded-full bg-white shadow-xl">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <FaLink className="filter text-2xl grayscale hover:text-[#FF5403] hover:filter-none cursor-pointer transition duration-300" />
          </TooltipTrigger>
          <TooltipContent>Link in Bio</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger>
            <FaShare className="filter text-2xl grayscale hover:text-[#FF5403] hover:filter-none cursor-pointer transition duration-300" />
          </TooltipTrigger>
          <TooltipContent>Share</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger>
            <FaFolder className=" grayscale text-2xl text-[#FF5403] hover:filter-none cursor-pointer transition duration-300" />
          </TooltipTrigger>
          <TooltipContent>Media kit</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger>
            <LiaFileInvoiceDollarSolid className=" filter text-2xl grayscale hover:text-[#FF5403] hover:filter-none cursor-pointer transition duration-300" />
          </TooltipTrigger>
          <TooltipContent>Invoicing</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default Sidebar;
