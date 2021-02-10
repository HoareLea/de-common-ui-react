// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import AuthSSO from "./AuthSSO";
import { AuthSSOProps } from "./AuthSSO.types";

describe("Test Component", () => {
  let props: AuthSSOProps;

  beforeEach(() => {
    props = {
      
    };
  });

  const renderComponent = () => render(<AuthSSO {...props} />);

  it("should render correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("AuthSSO");

    expect(component).toBeVisible();
  });
});
