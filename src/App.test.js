import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders reservation link", () => {
  render(<App />);
  const linkElement = screen.getByText(/reservations/i);
  expect(linkElement).toBeInTheDocument();
});
