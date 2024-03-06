import { EventHandler, SyntheticEvent } from 'react';

export type WzCheckableChipSize = 'sm' | 'md' | 'lg';
export interface WzCheckableChipProps {
  children: string;
  onChipClicked?(event: CustomEvent): void;
  onChipChanged?(event: CustomEvent): void;
  onRemoveClicked?(event: CustomEvent): void;
  showCheckIconWhenChecked?: boolean;
  checked?: boolean;
  value?: string | number;
  size?: WzCheckableChipSize;
  disabled?: boolean;
  readOnly?: boolean;
  isDragging?: boolean;
  removable?: boolean;
}
