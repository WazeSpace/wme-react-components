import { EventHandler, SyntheticEvent } from 'react';

export type WzCheckableChipSize = 'sm' | 'md' | 'lg';
export interface WzCheckableChipProps {
  children: string;
  onChipClicked?: EventHandler<SyntheticEvent<CustomEvent>>;
  onChipChanged?: EventHandler<SyntheticEvent<CustomEvent>>;
  onRemoveClicked?: EventHandler<SyntheticEvent<CustomEvent>>;
  showCheckIconWhenChecked?: boolean;
  checked?: boolean;
  value?: string | number;
  size?: WzCheckableChipSize;
  disabled?: boolean;
  readOnly?: boolean;
  isDragging?: boolean;
  removable?: boolean;
}
