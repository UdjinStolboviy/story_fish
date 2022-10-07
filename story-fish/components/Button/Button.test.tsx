import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Button } from "./Button";

describe("Button test cases", () => {
  it("renders check", () => {
    const onClick = jest.fn();
    const { asFragment } = render(<Button onClick={onClick}>Button</Button>);

    expect(asFragment()).toMatchSnapshot();
  });

  it("check onClick callback", () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Button</Button>);

    //screen.debug();
    const element = screen.getByRole("button");

    userEvent.click(element);

    expect(onClick).toHaveBeCalled();
  });
});
