import React from "react";
import { render, screen } from "@testing-library/react";
import Title from "./Title";

describe(Title, () => {
  it("should render Title", async () => {
    render(<Title>Some title</Title>);
    expect(await screen.findByText("Some title")).toBeInTheDocument();
  });
});
