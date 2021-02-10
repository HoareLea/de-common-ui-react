
import { HTMLAttributes } from 'react';
import { CommonComponent } from '../common.models';
export interface AuthSSOProps extends CommonComponent, HTMLAttributes<HTMLElement>  {
  onSuccess?: () => void;
  onFail?: () => void;
  paneWidth?: number;
  paneheight?: number;
  position?: Position;
}

export enum Position {
  TOP = 'top',
  TOP_LEFT = 'top-left',
  TOP_RIGHT = 'top-right',
  BOTTOM = 'bottom',
  BOTTOM_LEFT = 'bottom-left',
  BOTTOM_RIGHT = 'bottom-right',
  LEFT = 'left',
  RIGHT = 'right'
}