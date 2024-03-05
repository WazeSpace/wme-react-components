import { ReactNode } from 'react';

export type WzButtonVariant = 'primary' | 'secondary' | 'text' | 'shadowed' | 'clear-icon';
export type WzButtonSize = 'xs' | 'sm' | 'md' | 'lg';

export interface WzButtonProps {
  children: ReactNode;
  disabled?: boolean;
  busy?: boolean;
  color?: WzButtonVariant;
  size?: WzButtonSize;
  alarming?: boolean;
  type?: 'button' | 'submit';
  name?: string;
  value?: string;
}
