// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Button from "./Button";
import { ButtonProps } from "./Button.types";

describe("Test Component", () => {
  let props: ButtonProps;

  beforeEach(() => {
    props = {
      
    };
  });

  const renderComponent = () => render(<Button {...props} />);

  it("should render correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("Button");

    expect(component).toBeVisible();
  });
});
