import React from 'react';
import { Button as EgButton } from 'evergreen-ui';
import { ButtonProps } from "./Button.types";
import { getSize } from "../utils";
import "./Button.scss";

const Button: React.FC<ButtonProps> = (props) => {
  const { children, otherText, size, ...rest } = props;
  const height = size ? getSize(size) : getSize('md');

  return (
    <EgButton data-testid="Button" height={ height } { ...rest }>{ children } { otherText }</EgButton>
  )
};

export default Button;