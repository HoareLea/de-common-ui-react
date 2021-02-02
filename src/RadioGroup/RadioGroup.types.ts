
import { CommonComponent } from '../common.models';

export interface RadioGroupProps extends CommonComponent {
  size?: 'sm' | 'md';
  options: RadioProps[];
  value: string;
  onChange?: () => object;
}

export interface RadioProps extends CommonComponent {
  size?: 'sm' | 'md';
  value: string;
  onChange?: () => object;
  checked?: boolean;
  value: string;
  label: string;
  name: string;
}
