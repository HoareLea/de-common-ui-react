
import React from "react";
import { Story } from '@storybook/react/types-6-0';
import Checkbox from "./Checkbox";
import { CheckboxProps } from "./Checkbox.types";

export default {
  title: "Components/Checkbox",
  component: Checkbox
};

export const Default: Story<CheckboxProps> = (props) => {
  return <Checkbox {...props} label="My checkbox"/>;
};
