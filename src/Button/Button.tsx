import React from 'react';
import { BoxComponent, Button as EgButton } from 'evergreen-ui';
import { ButtonProps } from "./Button.types";
import { getSize } from "../utils";
import "./Button.scss";

const Button: React.FC<ButtonProps> = (props) => {
  const { children, size, ...rest } = props;
  const height = size ? getSize(size) : getSize('md');
  const restBoxProps = rest as BoxComponent;
  return (
    <EgButton data-testid="Button" height={ height } { ...restBoxProps }>{ children }</EgButton>
  )
};

export default Button;