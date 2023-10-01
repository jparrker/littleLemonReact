import React from "react";
import { render, screen } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";
import Hero from "./Hero";

test("renders Hero component without errors", () => {
  render(
    <BrowserRouter>
      <Hero />
    </BrowserRouter>
  );

  expect(screen.getByText("Little Lemon")).toBeInTheDocument();
  expect(screen.getByText("Chicago")).toBeInTheDocument();
  expect(
    screen.getByText(
      "Founded by Greek immigratns in 1902, Little Lemon is Chicago's best-known, award winning, family owned, mediterranean resturant. From greek classics to modern mediterranean dishes, whether you are dining in or you need catering, Little Lemon has you covered."
    )
  ).toBeInTheDocument();
  expect(screen.getByText("Reserve a Table")).toBeInTheDocument();
});
