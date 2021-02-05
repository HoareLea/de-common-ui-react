import { CommonComponent } from './../common.models';
import { InputHTMLAttributes } from 'react';

export interface CheckboxProps
  extends CommonComponent, InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  name?: string;
  label?: string;
  value?: string;
  checked?: boolean;
  indeterminate?: boolean;
  onChange?: () => void;
  appearance?: 'default';
}
