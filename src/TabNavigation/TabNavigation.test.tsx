// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import TabNavigation from "./TabNavigation";
import { TabNavigationProps } from "./TabNavigation.types";

describe("Test Component", () => {
  let props: TabNavigationProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<TabNavigation {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("TabNavigation");

    expect(component).toHaveTextContent("harvey was here");
  });
});
