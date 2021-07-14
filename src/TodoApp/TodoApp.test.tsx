import React from "react";
import { render, screen } from "@testing-library/react";
import { TodoApp } from "./TodoApp";

test("renders learn react link", () => {
  render(<TodoApp />);
  const linkElement = screen.getByText(/Todo/i);
  expect(linkElement).toBeInTheDocument();
});
