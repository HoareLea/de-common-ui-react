// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import AuthSSO from "./AuthSSO";
import { AuthSSOProps } from "./AuthSSO.types";
import { act } from "react-dom/test-utils";

describe("Test AuthSSO Component", () => {
  let props: AuthSSOProps;

  beforeEach(() => {
    props = {
      
    };
  });
  
  
  let component;

  it("should render correctly", () => {
    act(() => {
      const renderComponent = () => render(<AuthSSO {...props} />);
      const { getByTestId } = renderComponent();
      component = getByTestId("AuthSSO");
    });
    expect(component).toBeVisible();
  });
});
