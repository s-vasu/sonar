import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; // Provides custom matchers like toBeInTheDocument
import RangeSlider from "./RangeSlider";

describe("RangeSlider Component", () => {
  const mockHandleChange = jest.fn();

  const defaultProps = {
    maxValue: 100,
    curValue: 50,
    val: 50,
    handleChange: mockHandleChange,
  };

  it("renders the RangeSlider component", () => {
    render(<RangeSlider {...defaultProps} />);

    // Check if the slider is rendered and the current value is displayed correctly
    expect(screen.getByRole("slider")).toBeInTheDocument();
    expect(screen.getByText(/selected of/i)).toBeInTheDocument();
  });

  it("calls handleChange on slider change", () => {
    render(<RangeSlider {...defaultProps} />);

    const slider = screen.getByRole("slider");

    // Simulate changing the slider value
    fireEvent.change(slider, { target: { value: "60" } });

    // Ensure that the handleChange function is called with the correct arguments
    expect(mockHandleChange).toHaveBeenCalledTimes(1);
    expect(mockHandleChange).toHaveBeenCalledWith(expect.any(Event), 60, 0); // Include the previous value if necessary
  });
});
