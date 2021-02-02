
import React from "react";
import { TextInput as EgTextInput } from 'evergreen-ui';
import { TextInputProps } from "./TextInput.types";
import { getSize } from "../utils";
import "./TextInput.scss";

const TextInput: React.FC<TextInputProps> = (props) => {
  const { size, ...rest } = props;
  const height = size ? getSize(size) : getSize('md');
  return (
  <EgTextInput height={ height } { ...rest }/>
)};

export default TextInput;

