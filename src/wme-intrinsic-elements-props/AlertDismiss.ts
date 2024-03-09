import { ReactNode } from 'react';

export interface WzAlertDismissProps {
  children: ReactNode;
  onAlertDismissed?(event: CustomEvent): void;
}
