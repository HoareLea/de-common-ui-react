import { ButtonHTMLAttributes } from 'react';
import { CommonComponent, Intention, Size } from '../common.models';
export interface ButtonProps
  extends CommonComponent, ButtonHTMLAttributes<HTMLInputElement> {
  size?: Size;
  intent?: Intention;
}
