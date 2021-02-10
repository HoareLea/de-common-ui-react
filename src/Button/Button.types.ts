import { ButtonOwnProps, BoxOwnProps } from 'evergreen-ui';
import { ButtonHTMLAttributes, HTMLAttributes } from 'react';
import { CommonComponent, Intention, Size } from '../common.models';
export interface ButtonProps
  extends CommonComponent, HTMLAttributes<HTMLInputElement>   {
  size?: Size;
  intent?: Intention;
  iconBefore?: React.ElementType | JSX.Element | null | false;
  iconAfter?: React.ElementType | JSX.Element | null | false;
  className?: string;
  isLoading?: boolean;
  isActive?: boolean;
}
