import { EventHandler, SyntheticEvent } from 'react';

export interface WzSectionHeaderProps {
  onBackClicked?: EventHandler<SyntheticEvent<CustomEvent>>;
  headline: string;
  subtitle?: string;
  size?: 'section-header-1' | 'section-header-2' | 'section-header-3';
  backButton?: boolean;
  imageSrc?: string;
}
