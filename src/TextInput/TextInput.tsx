
import React from "react";
import { BoxComponent, TextInput as EgTextInput } from 'evergreen-ui';
import { TextInputProps } from "./TextInput.types";
import { getSize } from "../utils";
import "./TextInput.scss";

const TextInput: React.FC<TextInputProps> = (props) => {
  const { size, ...rest } = props;
  const height = size ? getSize(size) : getSize('md');
  const restBoxProps = rest as BoxComponent;
  return (
  <EgTextInput data-testid="TextInput" height={ height } { ...restBoxProps }/>
)};

export default TextInput;

