// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import TabNavigation from "./TabNavigation";
import { TabNavigationProps } from "./TabNavigation.types";

describe("Test Component", () => {
  let props: TabNavigationProps;

  beforeEach(() => {
    props = {
      
    };
  });

  const renderComponent = () => render(<TabNavigation {...props} />);

  it("should render correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("TabNavigation");

    expect(component).toBeVisible();
  });
});
