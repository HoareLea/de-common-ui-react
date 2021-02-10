
import { CommonComponent } from '../common.models';
import { HTMLAttributes } from 'react';
import { BoxOwnProps } from 'evergreen-ui';

export interface RadioGroupProps extends CommonComponent, HTMLAttributes<HTMLInputElement> {
  label?: string;
  size?: 'sm' | 'md';
  options?: RadioProps[];
  onChange?: (event: any) => void;
}

export interface RadioProps extends CommonComponent, HTMLAttributes<HTMLInputElement> {
  label?: string;
  name?: string;
  size?: 'sm' | 'md';
  value?: string;
  onChange?: (event: any) => object;
  checked?: boolean;
}
