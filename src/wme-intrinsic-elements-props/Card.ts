import { ReactNode } from 'react';

export type WzCardSize = 'sm' | 'md' | 'lg';
export type WzCardElevation = 0 | 1 | 2 | 3 | 4 | 5;

export interface WzCardProps {
  children: ReactNode;
  size?: WzCardSize;
  elevation?: WzCardElevation;
  elevationOnHover?: WzCardElevation;
  disabled?: boolean;
  read?: boolean;
  selected?: boolean;
}
