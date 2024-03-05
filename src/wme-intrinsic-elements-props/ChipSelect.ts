import { EventHandler, SyntheticEvent } from 'react';
import { WzCheckableChipProps } from './CheckableChip';

export interface WzChipSelectProps {
  onChipSelected: EventHandler<SyntheticEvent<CustomEvent>>;
  value?: WzCheckableChipProps['value'];
}
