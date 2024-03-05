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
  WzChipMultiSelectProps
} from './wme-intrinsic-elements-props';

export namespace Waze.IntrinsicElements {
  export const WzAnchor = createReactComponent<'', WzAnchorProps>('wz-a');

  export const WzAlert = createReactComponent<'header' | 'body' | 'dismiss' | 'action' | 'icon'>('wz-alert')
  export const WzAlertDismiss = createReactComponent<'', WzAlertDismissProps>('wz-alert-dismiss');
  export const WzAlertPagination = createReactComponent<'', WzAlertPaginationProps>('wz-alert-pagination');
  export const WzAlertsGroup = createReactComponent<'', WzAlertsGroupProps>('wz-alerts-group');

  export const WzBadge = createReactComponent<'', WzBadgeProps>('wz-badge');

  export const WzButton = createReactComponent<'left-icon' | 'right-icon', WzButtonProps>('wz-button');

  export const WzCaption = createReactComponent('wz-caption');
  export const WzOverline = createReactComponent('wz-overline');

  export const WzCard = createReactComponent<'', WzCardProps>('wz-card');

  export const WzCheckableChip = createReactComponent<'', WzCheckableChipProps>('wz-checkable-chip');
  export const WzChipSelect = createReactComponent<'', WzChipSelectProps>('wz-chip-select');
  export const WzChipMultiSelect = createReactComponent<'', WzChipMultiSelectProps>('wz-chip-multi-select');
}
