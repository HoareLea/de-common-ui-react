// Generated with util/create-component.js
import React from "react";
import { BoxComponent, Checkbox as EgCheckbox } from 'evergreen-ui';
import { CheckboxProps } from "./Checkbox.types";

import "./Checkbox.scss";

const Checkbox: React.FC<CheckboxProps> = (props) => {
  const restBoxProps = props as BoxComponent;
  return (
    <EgCheckbox data-testid="Checkbox" {...restBoxProps} label="My checkbox" />
  )
};

export default Checkbox;

