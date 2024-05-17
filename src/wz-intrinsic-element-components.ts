import { createReactComponent } from './utils/create-react-component';
import {
  WzAnchorProps,
  WzAlertDismissProps,
  WzAlertPaginationProps,
  WzAlertsGroupProps,
  WzBadgeProps,
  WzButtonProps,
  WzCardProps,
  WzCheckableChipProps,
  WzChipSelectProps,
  WzChipMultiSelectProps,
  WzCheckboxProps,
  WzIconProps,
  WzSectionHeaderProps,
  WzLabelProps,
} from './wme-intrinsic-elements-props';
import { WzListItemProps } from './wme-intrinsic-elements-props/WzListItem';

export namespace Waze.IntrinsicElements {
  export const WzAnchor = createReactComponent<HTMLAnchorElement, '', WzAnchorProps>('wz-a');

  export const WzAlert = createReactComponent<HTMLElement, 'header' | 'body' | 'dismiss' | 'action' | 'icon'>('wz-alert')
  export const WzAlertDismiss = createReactComponent<HTMLElement, '', WzAlertDismissProps>('wz-alert-dismiss');
  export const WzAlertPagination = createReactComponent<HTMLElement, '', WzAlertPaginationProps>('wz-alert-pagination');
  export const WzAlertsGroup = createReactComponent<HTMLElement, '', WzAlertsGroupProps>('wz-alerts-group');

  export const WzBadge = createReactComponent<HTMLElement, '', WzBadgeProps>('wz-badge');

  export const WzButton = createReactComponent<HTMLButtonElement, 'left-icon' | 'right-icon', WzButtonProps>('wz-button');

  export const WzCaption = createReactComponent('wz-caption');
  export const WzOverline = createReactComponent('wz-overline');
  export const WzLabel = createReactComponent<HTMLElement, '', WzLabelProps>('wz-label');

  export const WzCard = createReactComponent<HTMLElement, '', WzCardProps>('wz-card');

  export const WzCheckableChip = createReactComponent<HTMLElement, '', WzCheckableChipProps>('wz-checkable-chip');
  export const WzChipSelect = createReactComponent<HTMLElement, '', WzChipSelectProps>('wz-chip-select');
  export const WzChipMultiSelect = createReactComponent<HTMLElement, '', WzChipMultiSelectProps>('wz-chip-multi-select');

  export const WzCheckbox = createReactComponent<HTMLInputElement, '', WzCheckboxProps>('wz-checkbox');

  export const WzIcon = createReactComponent<HTMLElement, '', WzIconProps>('wz-icon');

  export const WzList = createReactComponent<HTMLElement>('wz-list');
  export const WzListItem = createReactComponent<HTMLElement, 'icon' | 'item-key' | 'image' | 'subtitle' | 'value' | 'actions', WzListItemProps>('wz-list-item');

  export const WzSectionHeader = createReactComponent<HTMLElement, 'dropdown-items' | 'icon' | 'actions', WzSectionHeaderProps>('wz-section-header');
}
