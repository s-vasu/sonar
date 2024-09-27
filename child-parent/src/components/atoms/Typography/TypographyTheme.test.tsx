import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // Provides custom matchers like toBeInTheDocument
import TypographyTheme from "./TypographyTheme";

describe("TypographyTheme Component", () => {
  it("renders with the provided text and variant", () => {
    render(<TypographyTheme text="Hello, World!" variant="h1" />);

    // Check if the text is rendered
    expect(screen.getByText("Hello, World!")).toBeInTheDocument();

    // Check if the Typography component is rendered with the correct variant styles
    const typographyElement = screen.getByText("Hello, World!");
    expect(typographyElement).toHaveStyle("font-size: 6rem"); // Assuming h1 has a font-size of 6rem; adjust based on your theme.
  });

  it("renders children correctly", () => {
    render(
      <TypographyTheme variant="body1">
        <span>Child Text</span>
      </TypographyTheme>
    );

    // Check if the children are rendered
    expect(screen.getByText("Child Text")).toBeInTheDocument();
  });

  it("renders with the provided id", () => {
    render(<TypographyTheme id="unique-id" text="Sample Text" variant="h2" />);

    // Check if the id is correctly applied
    const typographyElement = screen.getByText("Sample Text");
    expect(typographyElement).toHaveAttribute("id", "unique-id");
  });
});
