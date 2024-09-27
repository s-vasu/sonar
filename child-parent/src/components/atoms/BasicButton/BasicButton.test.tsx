import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import BasicButton from "./BasicButton"; // adjust the import path as necessary

describe("BasicButton Component", () => {
  const mockClickHandler = jest.fn();

  it("renders the button with the correct text", () => {
    render(<BasicButton text="Click Me" />);
    const buttonElement = screen.getByText(/Click Me/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it("applies the correct variant and size props", () => {
    render(<BasicButton text="Click Me" variant="contained" size="large" />);
    const buttonElement = screen.getByText(/Click Me/i);
    expect(buttonElement).toHaveClass("MuiButton-contained"); // MUI applies 'contained' class for the variant
    expect(buttonElement).toHaveClass("MuiButton-sizeLarge"); 
  });

  it("applies custom className prop", () => {
    render(<BasicButton text="Reset" className="resetbtn" />);
    const buttonElement = screen.getByText(/Reset/i);
    expect(buttonElement).toHaveClass("resetbtn");
  });

  it("calls onClick handler when clicked", () => {
    render(<BasicButton text="Submit" onClick={mockClickHandler} />);
    const buttonElement = screen.getByText(/Submit/i);
    fireEvent.click(buttonElement);
    expect(mockClickHandler).toHaveBeenCalledTimes(1);
  });

  it("renders the reviewbtn class", () => {
    render(<BasicButton text="Review" className="reviewbtn" />);
    const buttonElement = screen.getByText(/Review/i);
    expect(buttonElement).toHaveClass("reviewbtn");
  });

  it("renders with default props if none are provided", () => {
    render(<BasicButton text="Default Button" />);
    const buttonElement = screen.getByText(/Default Button/i);
    expect(buttonElement).toHaveClass("MuiButton-text"); // Default variant is 'text'
    expect(buttonElement).toHaveClass("MuiButton-sizeMedium"); // Default size is 'medium'
  });
});
