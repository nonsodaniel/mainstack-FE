import React from "react";
import { render, screen } from "@testing-library/react";
import TransactionList from "@/app/parts/TransactionList";
import { transactions } from "@/public/data";

describe("TransactionList Component", () => {
  it("renders transactions correctly", () => {
    render(<TransactionList transactions={transactions} />);

    transactions.forEach((transaction, index) => {
      const transactionItem = screen.getByTestId(
        `transaction-item-${index + 1}`
      );
      expect(transactionItem).toBeInTheDocument();
      expect(transactionItem).toHaveTextContent(transaction.amount.toString());
      expect(transactionItem).toHaveTextContent(transaction.status);
      expect(transactionItem).toHaveTextContent(transaction.date);
    });
  });
});
