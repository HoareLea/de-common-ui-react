// Generated with util/create-component.js
import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { render } from "@testing-library/react";
import Button from "./Button";
import { ButtonProps } from "./Button.types";

describe("Test Button Component", () => {
  let props: ButtonProps;

  beforeEach(() => {
    props = {}
  });

  const renderComponent = () => render(<Button>HL Button</Button>);

  it("should render correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("Button");
    expect(component).toBeVisible();
  });
});
