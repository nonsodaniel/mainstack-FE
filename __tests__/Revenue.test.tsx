import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Revenue from "@/app/parts/Revenue";
import { transactions } from "@/public/data";

jest.mock("../hooks/useFetch", () => ({
  __esModule: true,
  default: jest.fn(() => ({
    data: transactions,
    loading: false,
    error: null,
  })),
}));

describe("Revenue Component", () => {
  it("renders revenue information", async () => {
    render(<Revenue />);

    await waitFor(() => {
      expect(screen.getByText(/Available balance/i)).toBeInTheDocument();
    });
    expect(screen.getByTestId("filter-container")).toBeInTheDocument();

    expect(screen.getByText("Export List")).toBeInTheDocument();

    expect(
      screen.getByText(`${transactions.length} Transactions`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Your transactions for the last 7 days/i)
    ).toBeInTheDocument();
  });
});
