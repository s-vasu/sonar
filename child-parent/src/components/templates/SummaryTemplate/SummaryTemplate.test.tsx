import React from "react";
import { render, screen } from "@testing-library/react";
import SummaryTemplate from "./SummaryTemplate"; // Adjust the import path as necessary

describe("SummaryTemplate", () => {
  it("renders children correctly", () => {
    const testText = "Hello, World!";
    render(<SummaryTemplate>{testText}</SummaryTemplate>);

    // Check if the text is present in the document
    const element = screen.getByText(testText);
    expect(element).toBeInTheDocument();
  });

  it("renders without children", () => {
    render(<SummaryTemplate />);

    // Check if the Box component is rendered correctly
    // const boxElement = screen.getByRole("presentation"); // The Box component is a presentational component
    // expect(boxElement).toBeInTheDocument();
  });
});
