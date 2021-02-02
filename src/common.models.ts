export interface CommonComponent {
  appearance?: Appearance;
  className?: string;
  disabled?: boolean;
  id: string;
  isInvalid?: boolean;
  required?: boolean; // Makes the input element required.
};

export type Appearance = 'default' | 'primary' | 'minimal';
export type Intention = 'success' | 'warning';
export type Size = 'sm' | 'md' | 'lg';