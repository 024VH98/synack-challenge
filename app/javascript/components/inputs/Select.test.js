import React from "react";
import { render, screen } from "@testing-library/react";
import Select from "./Select";

const ENGINE_OPTIONS = [
  { value: "google", title: "Google" },
  { value: "bing", title: "Bing" },
  { value: "both", title: "Google and Bing" },
];

describe(Select, () => {
  it("should render Select", async () => {
    render(<Select htmlFor="name" label="Name" options={ENGINE_OPTIONS} />);
    expect(await screen.findByLabelText("Name")).toBeInTheDocument();
  });
});
