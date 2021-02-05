import { HtmlHTMLAttributes } from 'react';
import { CommonComponent, Size } from './../common.models';
export interface AvatarProps
    extends CommonComponent, HtmlHTMLAttributes<AvatarProps> {
    fullName: string;
    src?: string;
    size?: Size;
    isSolid?: boolean;
    color?: string;
    forceShowInitials?: boolean;
    sizeLimitOneCharacter?: number;
    getInitials?: () => string;
}
