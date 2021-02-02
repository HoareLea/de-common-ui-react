// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Toaster from "./Toaster";
import { ToasterProps } from "./Toaster.types";

describe("Test Component", () => {
  let props: ToasterProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<Toaster {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Toaster");

    expect(component).toHaveTextContent("harvey was here");
  });
});
