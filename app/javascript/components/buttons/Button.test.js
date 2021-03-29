import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./Button";

describe(Button, () => {
  it("should render Button", async () => {
    render(<Button />);
    expect(await screen.findByText("Search")).toBeInTheDocument();
  });

  it("should call onClick function", async () => {
    const onClickMock = jest.fn();
    render(<Button onClick={onClickMock} />);
    const $button = await screen.findByText("Search");
    fireEvent.click($button);
    expect(onClickMock).toHaveBeenCalled();
  });
});
