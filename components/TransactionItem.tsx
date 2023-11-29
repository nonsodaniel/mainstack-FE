import React from "react";
import { GoArrowDownLeft } from "react-icons/go";
import { MdArrowOutward } from "react-icons/md";

const TransactionItem = ({
  name,
  amount,
  status,
  date,
  isSuccessful,
  isPending,
  transactionType,
}) => {
  // Determing the icon based on the transaction type
  const getTransactionIcon = () => {
    if (transactionType === "incoming") {
      return (
        <GoArrowDownLeft
          className={`text-2xl ${
            isSuccessful ? "text-[#075132]" : "text-[#961100]"
          }`}
        />
      );
    } else if (transactionType === "outgoing") {
      return (
        <MdArrowOutward
          className={`text-2xl ${
            isSuccessful ? "text-[#075132]" : "text-[#961100]"
          }`}
        />
      );
    }
  };

  return (
    <div className="flex items-center justify-between bg-white p-4 mb-4 rounded ">
      <div className="flex items-center space-x-4">
        <span
          className={`p-3 ${
            isSuccessful ? "bg-[#E3FCF2]" : "bg-[#F9E3E0]"
          } rounded-full`}
        >
          {" "}
          {getTransactionIcon()}
        </span>
        <div>
          <p className="font-bold">{name}</p>
          <p
            className={`text-sm ${
              isSuccessful
                ? "text-[#0EA163]"
                : isPending
                ? "text-[#A77A07]"
                : "text-[#961100]"
            }`}
          >
            {status}
          </p>
        </div>
      </div>

      {/* Transaction Amount and Date */}
      <div className="flex flex-col text-right">
        <p className="font-bold text-md lg:text-xl">{amount}</p>
        <p className="text-sm">{date}</p>
      </div>
    </div>
  );
};

export default TransactionItem;
