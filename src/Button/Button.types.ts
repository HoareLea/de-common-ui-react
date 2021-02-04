import { ButtonHTMLAttributes, HtmlHTMLAttributes } from 'react';
import { CommonComponent, Intention, Size } from '../common.models';
import { BoxComponent, ButtonOwnProps } from 'evergreen-ui';
// React.HTMLProps<HTMLButtonElement>
// React.ButtonHTMLAttributes<HTMLButtonElement>
export interface ButtonProps extends CommonComponent, ButtonHTMLAttributes<ButtonOwnProps>{
    size?: Size;
    intent?: Intention;
}
