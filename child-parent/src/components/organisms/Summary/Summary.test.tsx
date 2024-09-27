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

    // Simulate changing the slider value
    const slider = screen.getByRole("slider");
    fireEvent.change(slider, { target: { value: 60 } });

    // Check payback amount and total payout
    expect(screen.getByText(/Payback amount/i)).toBeInTheDocument();
    expect(screen.getByText("60")).toBeInTheDocument(); // Payback amount
    expect(screen.getByText("$67.2")).toBeInTheDocument(); // Total payout
  });
});
