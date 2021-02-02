// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import FormField from "./FormField";
import { FormFieldProps } from "./FormField.types";

describe("Test Component", () => {
  let props: FormFieldProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<FormField {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("FormField");

    expect(component).toHaveTextContent("harvey was here");
  });
});
