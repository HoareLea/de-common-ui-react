// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Tab from "./Tab";
import { TabProps } from "./Tab.types";

describe("Test Component", () => {
  let props: TabProps;

  beforeEach(() => {
    props = {
      
    };
  });

  const renderComponent = () => render(<Tab {...props} />);

  it("should render correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("Tab");

    expect(component).toBeVisible();
  });
});
