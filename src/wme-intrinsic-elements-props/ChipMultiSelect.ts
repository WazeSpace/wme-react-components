import { EventHandler, SyntheticEvent } from 'react';
import { WzCheckableChipProps } from './CheckableChip';

export interface WzChipMultiSelectProps {
  onChipSelected?(event: CustomEvent<{ value: string[] }>): void;
  maxSelected?: number;
}
