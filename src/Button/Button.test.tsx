// Generated with util/create-component.js
import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { render } from "@testing-library/react";
import Button from "./Button";
import { ButtonProps } from "./Button.types";
import { BoxComponent, ButtonOwnProps } from "evergreen-ui";

describe("Test Component", () => {
  let props: ButtonProps;

  beforeEach(() => {
    
  });

  const handleClick = (sayWhat: string) => console.log(sayWhat);

  const renderComponent = () => render(<Button onClick={() => handleClick('hey')}>HL Button</Button>);

  it("should render correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("Button");

    expect(component).toBeVisible();
  });
});
