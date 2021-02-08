// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Popover from "./Popover";
import { PopoverProps } from "./Popover.types";

describe("Test Popover Component", () => {
  let props: PopoverProps;

  beforeEach(() => {
    props = {
      
    };
  });

  const renderComponent = () => render(<Popover {...props} />);

  it("should render correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("Popover");

    expect(component).toBeVisible();
  });
});
