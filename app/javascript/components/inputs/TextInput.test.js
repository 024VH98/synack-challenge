import React from "react";
import { render, screen } from "@testing-library/react";
import TextInput from "./TextInput";

describe(TextInput, () => {
  it("should render TextInput", async () => {
    render(<TextInput htmlFor="name" label="Name" />);
    expect(await screen.findByLabelText("Name")).toBeInTheDocument();
  });
});
