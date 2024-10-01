import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App"; // Adjust path if necessary



jest.mock("./pages/Page", () => () => (
  <div data-testid="page-component">Mocked Page</div>
));

describe("App Component", () => {
  it("renders without crashing", () => {
    render(<App />);
    const appElement = screen.getByTestId("page-component");
    expect(appElement).toBeInTheDocument();
  });

  it("renders the Page component", () => {
    render(<App />);
    const pageElement = screen.getByTestId("page-component");
    expect(pageElement).toBeInTheDocument();
    expect(pageElement).toHaveTextContent("Mocked Page");
  });

 
});
