
import { CommonComponent } from '../common.models';
import { HTMLAttributes } from 'react';

export interface RadioGroupProps extends CommonComponent, HTMLAttributes<HTMLInputElement> {
  label?: string;
  size?: 'sm' | 'md';
  options?: RadioProps[];
  onChange?: () => object;
}

export interface RadioProps extends CommonComponent, HTMLAttributes<HTMLInputElement> {
  label?: string;
  name?: string;
  size?: 'sm' | 'md';
  value?: string;
  onChange?: () => object;
  checked?: boolean;
}
