import { EventHandler, ReactNode, SyntheticEvent } from 'react';

export interface WzAlertDismissProps {
  children: ReactNode;
  onAlertDismissed?(event: CustomEvent): void;
}
