import { EventHandler, SyntheticEvent } from 'react';
import { WzCheckableChipProps } from './CheckableChip';

export interface WzChipMultiSelectProps {
  onChipSelected?: EventHandler<SyntheticEvent<CustomEvent>>;
  maxSelected?: number;
}
