import React from "react";
import TransactionItem from "@/components/TransactionItem";
import { UserTransactionData } from "@/lib/types";

interface TransactionListProps {
  transactions: UserTransactionData[];
}

const TransactionList = ({ transactions }: TransactionListProps) => {
  return (
    <div className="w-full">
      {transactions.map((transaction: UserTransactionData, index: number) => (
        <TransactionItem key={index} index={index} {...transaction} />
      ))}
    </div>
  );
};

export default TransactionList;
