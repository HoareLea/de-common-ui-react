import React from 'react';
import { Button as EgButton } from 'evergreen-ui';
import { ButtonProps } from "./Button.types";
import "./Button.scss";

const Button: React.FC<ButtonProps> = (props) => {
  const { children, otherText, size, ...rest } = props;
  const height = size ? getSize(size) : getSize('md');
  return (
    <EgButton height={ height } { ...rest }>{ children } { otherText }</EgButton>
  )
};

export const getSize = (size: string = 'md') => {
  let height: number;
  switch (size) {
    case 'sm':
      height = 24;
      break;
    case 'md':
      height = 40;
      break;
    case 'lg':
      height = 48;
      break;
  
    default:
      break;
  }
  return height;
}

export default Button;