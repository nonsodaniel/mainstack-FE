"use client";
import React from "react";
import { FaFilter, FaDownload } from "react-icons/fa";
import Filter from "./Filter/Filter";
import { UserTransactionData } from "@/lib/types";

interface ITransactionHeaderProps {
  data: UserTransactionData[];
}

const TransactionHeader = (data: ITransactionHeaderProps) => {
  return (
    <div className="flex  flex-wrap items-center justify-between border-b-2 overflow-x-auto  border-[#EFF1F6] p-4">
      <div className="flex flex-col items-start ">
        <span className="text-[24px] font-bold">
          {data.data.length} Transactions
        </span>
        <span className="text-[14px] text-[#56616B]">
          Your transactions for the last 7 days
        </span>
      </div>
      <div className="flex items-center space-x-4 text-black font-medium pt-4">
        <span className="flex items-center px-6 cursor-pointer py-4 rounded-full bg-[#EFF1F6] whitespace-nowrap">
          <Filter />
        </span>
        <span className="flex items-center cursor-pointer space-x-2  px-5 py-4 rounded-full bg-[#EFF1F6] whitespace-nowrap">
          <span>Export List</span>
          <FaDownload />
        </span>
      </div>
    </div>
  );
};

export default TransactionHeader;
