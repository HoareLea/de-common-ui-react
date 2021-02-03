// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import RadioGroup from "./RadioGroup";
import { RadioGroupProps } from "./RadioGroup.types";

describe("Test Component", () => {
  let props: RadioGroupProps;

  beforeEach(() => {
    props = {
      label: "Some label",
      options: [
        {
          label: "Some option 1",
          value: "Hello"
        }
      ]
    };
  });

  const renderComponent = () => render(<RadioGroup {...props} />);

  it("should render correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("RadioGroup");

    expect(component).toBeVisible();
  });
});
