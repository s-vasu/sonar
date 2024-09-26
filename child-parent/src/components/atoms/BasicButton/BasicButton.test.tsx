import React from "react";
import { render, fireEvent,screen } from "@testing-library/react";
import BasicButton from "./BasicButton";


describe("BasicButton", () => {
  it("renders correctly with default props", () => {
    // const { getByRole } = render(<BasicButton text="Test Button" />);
    // const button = getByRole("button");
     const button = screen.getByRole("button");
     expect(button).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(button.textContent).toBe("Test Button");
  });

  it("renders correctly with different variants", () => {
    // const { getByRole } = render(
    //   <BasicButton variant="contained" text="Contained Button" />
    // );
    // const containedButton = getByRole("button");
     const containedButton = screen.getByRole("button");
     expect(containedButton).toBeInTheDocument();
    expect(containedButton).toBeInTheDocument();
    expect(containedButton.textContent).toBe("Contained Button");

    // const { getByRole: getByRole2 } = render(
    //   <BasicButton variant="outlined" text="Outlined Button" />
    // );
    // const outlinedButton = getByRole("button");
     const outlinedButton = screen.getByRole("button");
     expect(outlinedButton).toBeInTheDocument();
    expect(outlinedButton).toBeInTheDocument();
    expect(outlinedButton.textContent).toBe("Outlined Button");

    // const { getByRole: getByRole3 } = render(
    //   <BasicButton variant="text" text="Text Button" />
    // );
    // const textButton = getByRole("button");
     const textButton = screen.getByRole("button");
     expect(textButton).toBeInTheDocument();
    expect(textButton).toBeInTheDocument();
    expect(textButton.textContent).toBe("Text Button");
  });

  it("renders correctly with different sizes", () => {
    // const { getByRole } = render(
    //   <BasicButton size="small" text="Small Button" />
    // );
    // const smallButton = getByRole("button");
     const smallButton = screen.getByRole("button");
     expect(smallButton).toBeInTheDocument();
    expect(smallButton).toBeInTheDocument();
    expect(smallButton.textContent).toBe("Small Button");

    // const { getByRole: getByRole2 } = render(
    //   <BasicButton size="medium" text="Medium Button" />
    // );
    // const mediumButton = getByRole("button");
     const mediumButton = screen.getByRole("button");
     expect(mediumButton).toBeInTheDocument();
    expect(mediumButton.textContent).toBe("Medium Button");

    // const { getByRole: getByRole3 } = render(
    //   <BasicButton size="large" text="Large Button" />
    // );
    // const largeButton = getByRole("button");
     const largeButton = screen.getByRole("button");
     expect(largeButton).toBeInTheDocument();
    expect(largeButton.textContent).toBe("Large Button");
  });

  it("renders correctly with custom className", () => {
    // const { getByRole } = render(
    //   <BasicButton className="custom-class" text="Custom Button" />
    // );
    // const button = getByRole("button");
     const button = screen.getByRole("button");
     expect(button).toBeInTheDocument();
    expect(button).toHaveClass("custom-class");
  });

  it("calls onClick handler when clicked", () => {
    const handleClick = jest.fn();
    const { getByRole } = render(
      <BasicButton onClick={handleClick} text="Click Me" />
    );
     expect(handleClick).toBeInTheDocument();
    
    // const button = getByRole("button");
     const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

 
});
