import React from "react";
import TransactionItem from "@/components/TransactionItem";
import { transactions } from "@/public/data";

const TransactionList = () => {
  return (
    <div className="w-full">
      {transactions.map((transaction, index) => (
        <TransactionItem key={index} {...transaction} />
      ))}
    </div>
  );
};

export default TransactionList;
