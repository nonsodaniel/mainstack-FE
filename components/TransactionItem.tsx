import { UserTransactionData } from "@/lib/types";
import React from "react";
import { GoArrowDownLeft } from "react-icons/go";
import { MdArrowOutward } from "react-icons/md";
interface ITransactionItemProps extends UserTransactionData {
  index: number;
}

const TransactionItem = ({
  metadata,
  amount,
  status,
  date,
  type,
  index,
}: ITransactionItemProps) => {
  // Determing the icon based on the transaction type
  const isSuccessful = status === "successful";

  const userName = metadata?.name;
  const productName = metadata?.product_name;
  const nameValue = type === "deposit" ? productName : `Cash ${type}`;
  const subNameValue = type === "deposit" ? userName : status;

  const statusColor =
    type === "withdrawal"
      ? "text-[#0EA163]"
      : type === "deposit"
      ? "text-black"
      : "text-[#961100]";
  const getTransactionIcon = () => {
    if (type === "deposit") {
      return (
        <GoArrowDownLeft
          className={`text-2xl ${
            isSuccessful ? "text-[#075132]" : "text-[#961100]"
          }`}
        />
      );
    } else if (type === "withdrawal") {
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
    <div
      className="flex items-center justify-between bg-white p-4 mb-4 rounded"
      data-testid={`transaction-item-${index + 1}`}
    >
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
          <p
            className="font-light text-sm"
            data-testid={`transaction-name-${index + 1}`}
          >
            {nameValue || userName}
          </p>
          <p
            className={`text-xs font-light ${statusColor}`}
            data-testid={`transaction-username-${index + 1}`}
          >
            {subNameValue}
          </p>
        </div>
      </div>

      {/* Transaction Amount and Date */}
      <div className="flex flex-col text-right">
        <p
          className="font-extrabold text-sm"
          data-testid={`transaction-amount-${index + 1}`}
        >
          USD {amount}
        </p>
        <p
          className="text-xs font-light"
          data-testid={`transaction-date-${index + 1}`}
        >
          {date}
        </p>
      </div>
    </div>
  );
};

export default TransactionItem;
