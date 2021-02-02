import { CommonComponent } from './../common.models';

export interface TabProps extends CommonComponent {
    isSelected?: boolean;
    appearance?: 'default';
    onSelectfunc?: () => void;
}
