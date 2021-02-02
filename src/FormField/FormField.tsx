
import React from "react";
import { FormField as EgFormField } from 'evergreen-ui';
import { FormFieldProps } from "./FormField.types";
import "./FormField.scss";

const FormField: React.FC<FormFieldProps> = (props) => {
  const { children, ...rest } = props;
  return (
  <EgFormField { ...rest }>{ children }</EgFormField>
)};

export default FormField;
