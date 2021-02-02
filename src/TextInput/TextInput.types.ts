import { Size } from './../common.models';
import { CommonComponent } from '../common.models';

export interface TextInputProps extends CommonComponent {
    appearance?: 'default';
    placeholder?: string;
    spellCheck?: boolean;
    height?: number;
    width?: string;
    size?: Size;
}
