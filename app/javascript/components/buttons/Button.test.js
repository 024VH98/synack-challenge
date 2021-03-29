import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./Button";

describe(Button, () => {
  it("should render Button", async () => {
    const onClickMock = jest.fn();
    render(<Button onClick={onClickMock} />);
    const $button = await screen.findByText("Search");
    expect(await screen.findByText("Search")).toBeInTheDocument();
    fireEvent.click($button);
    expect(onClickMock).toHaveBeenCalled();
  });
});
