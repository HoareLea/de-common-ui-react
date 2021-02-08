
import { HTMLAttributes } from 'react';
import { CommonComponent } from '../common.models';
export interface PaneProps extends CommonComponent, HTMLAttributes<HTMLElement>  {
  foo: string;
}