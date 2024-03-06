import { EventHandler, SyntheticEvent } from 'react';
import { WzCheckableChipProps } from './CheckableChip';

export interface WzChipSelectProps {
  onChipSelected?(event: CustomEvent<{ value: string }>): void;
  value?: WzCheckableChipProps['value'];
}
