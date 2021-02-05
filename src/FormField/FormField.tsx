
import React from "react";
import { BoxComponent, FormField as EgFormField } from 'evergreen-ui';
import { FormFieldProps } from "./FormField.types";
import "./FormField.scss";

const FormField: React.FC<FormFieldProps> = (props) => {
  const { children, ...rest } = props;
  const restBoxProps = rest as BoxComponent;
  return (
  <EgFormField data-testid="FormField" { ...restBoxProps }>{ children }</EgFormField>
)};

export default FormField;
