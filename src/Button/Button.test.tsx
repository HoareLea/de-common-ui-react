// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import Button from "./Button";

describe("Test Component", () => {
  let props: any;

  beforeEach(() => {
    props = {
      
    };
  });

  const handleClick = (sayWhat: string) => console.log(sayWhat);

  const renderComponent = () => render(<Button onClick={() => handleClick('hey')} {...props}>Some button</Button>);

  it("should render correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("Button");

    expect(component).toBeVisible();
  });
});
