import React from "react";
import { render } from "@testing-library/react";
import CompanyCard from "./CompanyCard";
import { MemoryRouter } from "react-router";

it("renders without crashing", function() {
  render(
    <MemoryRouter>
      <CompanyCard />
    </MemoryRouter>
  );
});

it("matches snapshot with logo", function() {
  let item = {
    handle: "rithm",
    name: "Rithm School",
    description: "Become an exceptional developer in 16 weeks.",
    logo_url:
      "https://pbs.twimg.com/profile_images/770491761412173826/ZUeIa4tw_400x400.jpg"
  };
  const { asFragment } = render(
    <MemoryRouter>
      <CompanyCard item={item} />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot without logo", function() {
  let item = {
    handle: "algo",
    name: "Algo School",
    description: "Become a mediocre developer in 160 weeks."
  };
  const { asFragment } = render(
    <MemoryRouter>
      <CompanyCard item={item} />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
