import { HTMLAttributes } from 'react';
import { CommonComponent } from './../common.models';

export interface TabProps extends CommonComponent, HTMLAttributes<HTMLElement>  {
  isSelected?: boolean;
  appearance?: 'default';
  onSelect?: () => void;
}
