import { CommonComponent } from './../common.models';

export interface CheckboxProps extends CommonComponent {
  id: string;
  name: string;
  label?: string;
  value: string;
  checked?: boolean;
  indeterminate?: boolean;
  onChange?: () => void;
  appearance?: 'default';
}
