// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import FormField from "./FormField";
import { FormFieldProps } from "./FormField.types";

describe("Test FormField Component", () => {
  let props: FormFieldProps;

  beforeEach(() => {
    props = {
      label: "Some label here"
    };
  });

  const renderComponent = () => render(<FormField {...props} />);

  it("should render correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("FormField");
    expect(component).toBeVisible();
  });
});
