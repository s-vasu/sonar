import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TypographyTheme from "./TypographyTheme";

describe("TypographyTheme Component", () => {
  it("renders with the provided text and variant", () => {
    render(<TypographyTheme text="Hello, World!" variant="h1" />);

    expect(screen.getByText("Hello, World!")).toBeInTheDocument();

    const typographyElement = screen.getByText("Hello, World!");
    expect(typographyElement).toHaveStyle("font-size: 6rem"); 
  });

  it("renders children correctly", () => {
    render(
      <TypographyTheme variant="body1">
        <span>Child Text</span>
      </TypographyTheme>
    );

  
    expect(screen.getByText("Child Text")).toBeInTheDocument();
  });

  it("renders with the provided id", () => {
    render(<TypographyTheme id="unique-id" text="Sample Text" variant="h2" />);

    const typographyElement = screen.getByText("Sample Text");
    expect(typographyElement).toHaveAttribute("id", "unique-id");
  });
});
