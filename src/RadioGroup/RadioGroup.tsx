
import React from "react";
import { RadioGroupProps } from "./RadioGroup.types";
import { RadioGroup as EgRadioGroup } from 'evergreen-ui';
import "./RadioGroup.scss";

export const getSize = (size: string = 'md') => {
  let height: 12 | 16;
  switch (size) {
    case 'sm':
      height = 12;
      break;
    case 'md':
      height = 16;
      break;
  
    default:
      break;
  }
  return height;
}

const RadioGroup: React.FC<RadioGroupProps> = (props) => {
  const { size, ...rest } = props;
  const height = size ? getSize(size) : getSize('md');

  return (
  <EgRadioGroup size={ height } {...rest} />
)};

export default RadioGroup;
