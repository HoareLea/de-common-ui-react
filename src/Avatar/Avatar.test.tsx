// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Avatar from "./Avatar";
import { AvatarProps } from "./Avatar.types";

describe("Test Avatar Component", () => {
  let props: AvatarProps;

  beforeEach(() => {
    props = {
      fullName: 'Lee Walters'
    };
  });

  const renderComponent = () => render(<Avatar {...props} />);

  it("should render correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("Avatar");

    expect(component).toBeVisible();
  });
});
