import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SimpleContainer from "./Container"; // Adjust the import path if necessary

jest.mock("../../../themes/theme", () => ({
  palette: {
    secondary: { main: "#ff4081" },
  },
}));

describe("SimpleContainer Component", () => {
  it("renders without crashing", () => {
    render(<SimpleContainer>Test Content</SimpleContainer>);
    const outerContainer = screen.getByText(/Test Content/i);
    expect(outerContainer).toBeInTheDocument();
  });

  it("renders the children content", () => {
    render(<SimpleContainer>Test Content</SimpleContainer>);
    const childContent = screen.getByText(/Test Content/i);
    expect(childContent).toBeInTheDocument();
  });

  it("applies the correct styles and class names", () => {
    render(<SimpleContainer>Styled Content</SimpleContainer>);

    // Select the outer container by ID
    const outerContainer = screen.getByTestId("outer-container");
    expect(outerContainer).toBeInTheDocument();
    expect(outerContainer).toHaveStyle({
      backgroundColor: "#201F24",
      height: "513px",
      borderRadius: "12px",
    });

    // Select the inner container by its content or role
    const innerContainer = screen.getByText(/Styled Content/i);
    expect(innerContainer).toHaveClass("inner-container");
    expect(innerContainer).toHaveStyle({ color: "#E8E7F0" });
  });

  it("renders theme-based colors properly", () => {
    render(
      <SimpleContainer>
        <div id="greytext">Grey Text</div>
        <div id="ratecap">Rate Caption</div>
        <div id="purpletext">Purple Text</div>
      </SimpleContainer>
    );

    // Test greytext with the mocked theme value
    const greyText = screen.getByText(/Grey Text/i);
    expect(greyText).toHaveStyle(`color: #ff4081`);

    const rateCap = screen.getByText(/Rate Caption/i);
    expect(rateCap).toHaveStyle(`color: #A5A5A6`);

    const purpleText = screen.getByText(/Purple Text/i);
    expect(purpleText).toHaveStyle(`color: #B4A9FF`);
  });
});
