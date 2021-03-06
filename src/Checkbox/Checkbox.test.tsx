// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Checkbox from "./Checkbox";
import { CheckboxProps } from "./Checkbox.types";

describe("Test Checkbox Component", () => {
  let props: CheckboxProps;

  beforeEach(() => {
    props = {};
  });

  const renderComponent = () => render(<Checkbox {...props} />);

  it("should render correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("Checkbox");
    expect(component).toBeVisible();
  });
});
