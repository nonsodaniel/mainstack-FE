import React from "react";
import { render, screen } from "@testing-library/react";
import TransactionList from "@/app/parts/TransactionList";

import { UserTransactionData } from "@/lib/types";
import { transactions } from "@/public/data";

describe("TransactionList Component", () => {
  beforeEach(() => {
    render(<TransactionList transactions={transactions} />);
  });

  it("renders transaction information correctly", () => {
    transactions.forEach((transaction: UserTransactionData, index: number) => {
      const userName = transaction.metadata?.name;
      const productName = transaction.metadata?.product_name;
      const nameValue =
        transaction.type === "deposit"
          ? productName
          : `Cash ${transaction.type}`;
      const subNameValue =
        transaction.type === "deposit" ? userName : transaction.status;

      const transactionItem = screen.getByTestId(
        `transaction-item-${index + 1}`
      );

      expect(transactionItem).toBeInTheDocument();
      expect(
        screen.getByTestId(`transaction-name-${index + 1}`)
      ).toHaveTextContent(nameValue || userName!);
      expect(
        screen.getByTestId(`transaction-username-${index + 1}`)
      ).toHaveTextContent(subNameValue!);
      expect(
        screen.getByTestId(`transaction-amount-${index + 1}`)
      ).toHaveTextContent(`USD ${transaction.amount}`);
      expect(
        screen.getByTestId(`transaction-date-${index + 1}`)
      ).toHaveTextContent(transaction.date);
    });
  });
});
