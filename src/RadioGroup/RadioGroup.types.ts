
import { CommonComponent } from '../common.models';

export interface RadioGroupProps extends CommonComponent {
  label: string;
  size?: 'sm' | 'md';
  options?: RadioProps[];
  onChange?: () => object;
}

export interface RadioProps extends CommonComponent {
  size?: 'sm' | 'md';
  value: string;
  onChange?: () => object;
  checked?: boolean;
  label: string;
  name?: string;
}
