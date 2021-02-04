import { ButtonHTMLAttributes } from 'react';
import { CommonComponent, Appearance, Intention, Size } from '../common.models';
export interface ButtonProps extends CommonComponent{
    size?: Size;
    intent?: Intention;
    otherText?: string;
}
