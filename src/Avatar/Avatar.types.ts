import { Size } from './../common.models';
// Generated with util/create-component.js
export interface AvatarProps {
    fullName: string;
    src?: string;
    size?: Size;
    isSolid?: boolean;
    color?: string;
    forceShowInitials?: boolean;
    sizeLimitOneCharacter?: number;
    getInitials?: () => string;
}
