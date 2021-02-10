export interface CommonComponent {
  appearance?: Appearance;
  isInvalid?: boolean;
};

export type Appearance = 'default' | 'primary' | 'minimal';
export type Intention = 'success' | 'warning';
export type Size = 'sm' | 'md' | 'lg' | 'xl';