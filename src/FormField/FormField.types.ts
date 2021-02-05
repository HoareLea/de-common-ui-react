import { CommonComponent } from "../common.models";
import { InputHTMLAttributes } from 'react';

export interface FormFieldProps
extends CommonComponent, InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelFor?: string;
  description?: string;
  hint?: string;
  isRequired?: boolean;
  validationMessage?: string;
}
