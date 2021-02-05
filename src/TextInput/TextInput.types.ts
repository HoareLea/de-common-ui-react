import { Size } from './../common.models';
import { CommonComponent } from '../common.models';
import { HTMLAttributes } from 'react';

export interface TextInputProps extends CommonComponent, HTMLAttributes<HTMLInputElement> {
    appearance?: 'default';
    placeholder?: string;
    spellCheck?: boolean;
    height?: number;
    width?: string;
    size?: Size;
}
