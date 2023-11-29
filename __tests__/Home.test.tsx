import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import UserProfile from "@/app/parts/userProfile";
import { userProfileList } from "@/public/data";

jest.mock("../hooks/useFetch", () => ({
  __esModule: true,
  default: jest.fn(() => ({
    data: {
      first_name: "Nonso",
      last_name: "Daniel",
      email: "nonso.daniel@gmail.com",
    },
    loading: false,
    error: null,
  })),
}));

describe("UserProfile Component", () => {
  it("renders user profile information", async () => {
    render(<UserProfile />);
    await waitFor(() => {
      expect(screen.getByText("Nonso Daniel")).toBeInTheDocument();
      expect(screen.getByText("nonso.daniel@gmail.com")).toBeInTheDocument();
    });
  });

  it("renders user profile information", async () => {
    render(<UserProfile />);

    await screen.findByText(/Nonso Daniel/i);

    userProfileList.forEach((item, index) => {
      const divElement = screen.getByTestId(`nav-container-${index}`);
      const buttonElement = screen.getByTestId(`nav-icon-${index}`);
      const titleElement = screen.getByTestId(`nav-title-${index}`);

      expect(divElement).toBeInTheDocument();
      expect(buttonElement).toBeInTheDocument();
      expect(buttonElement).toHaveAttribute("type", "button");
      expect(buttonElement).toHaveClass("rounded-lg p-1 hover:bg-light-gray");
      expect(titleElement).toBeInTheDocument();
      expect(titleElement).toHaveClass("dark:text-gray-200");
      expect(titleElement).toHaveTextContent(item.title);
    });
  });
});
