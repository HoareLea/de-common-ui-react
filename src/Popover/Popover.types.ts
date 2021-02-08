import { HTMLAttributes } from 'react';
import { CommonComponent } from '../common.models';
import { PopoverStatelessProps } from 'evergreen-ui';
export interface PopoverProps extends CommonComponent, HTMLAttributes<HTMLElement>  {
  content?: any;
  triggerElement?: JSX.Element | null;
  isShown?: boolean;
  trigger?: 'click' | 'hover';
  paneWidth?: number;
  paneheight?: number;
  position?: Position;
  display?: string;
  minWidth?: string;
  minHeight?: string;
  statelessProps?: PopoverStatelessProps;
  animationDuration?: number;
  onOpen?: () => void;
  onClose?: () => void;
  onBodyClick?: () => void;
  bringFocusInside?: boolean;
  shouldCloseOnExternalClick?: boolean;
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