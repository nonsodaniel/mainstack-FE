import React from "react";
import TransactionItem from "@/components/TransactionItem";
import { UserTransactionData } from "@/lib/types";

interface ITransactionsProps {
  transactions: UserTransactionData[];
}

const TransactionList = ({ transactions }: ITransactionsProps) => {
  return (
    <div className="w-full">
      {transactions.map((transaction, index) => (
        <TransactionItem key={index} index={index} {...transaction} />
      ))}
    </div>
  );
};

export default TransactionList;
