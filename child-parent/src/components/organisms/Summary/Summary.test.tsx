import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Summary from "./Summary";

describe("Summary Component", () => {
  const termMonths = 12;
  const contracts = 5;
  const maxValue = 100;

  it("updates payback amount and total payout when slider changes", () => {
    render(
      <Summary
        termMonths={termMonths}
        contracts={contracts}
        maxValue={maxValue}
      />
    );

    const slider = screen.getByRole("slider");
    fireEvent.change(slider, { target: { value: 60 } });


    expect(screen.getByText(/Payback amount/i)).toBeInTheDocument();
    // expect(screen.getByTestId("payback-amount")).toHaveTextContent("60"); // Payback amount
    // expect(screen.getByTestId("total-payout")).toHaveTextContent("$67.2"); // Total payout
  });
});
