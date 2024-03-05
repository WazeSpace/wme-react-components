import { createReactComponent } from './utils/create-react-component';
import {
  WzAnchorProps,
  WzAlertDismissProps,
  WzAlertPaginationProps,
  WzAlertsGroupProps,
} from './wme-intrinsic-elements-props';

export namespace Waze.IntrinsicElements {
  export const WzAnchor = createReactComponent<'', WzAnchorProps>('wz-a');

  export const WzAlert = createReactComponent<'header' | 'body' | 'dismiss' | 'action' | 'icon'>('wz-alert')
  export const WzAlertDismiss = createReactComponent<'', WzAlertDismissProps>('wz-alert-dismiss');
  export const WzAlertPagination = createReactComponent<'', WzAlertPaginationProps>('wz-alert-pagination');
  export const WzAlertsGroup = createReactComponent<'', WzAlertsGroupProps>('wz-alerts-group');
}
