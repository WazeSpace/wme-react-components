import { EventHandler, SyntheticEvent } from 'react';

export interface WzSectionHeaderProps {
  onBackClicked?(event: CustomEvent): void;
  headline: string;
  subtitle?: string;
  size?: 'section-header1' | 'section-header2' | 'section-header3';
  backButton?: boolean;
  imageSrc?: string;
}
