import { ReactElement, ReactNode } from 'react';
import { Waze } from '../wz-intrinsic-element-components';
import { pickProps } from '../utils/object-extraction';

export type WzAlertVariant = 'warning' | 'danger' | 'success' | 'tip' | 'info';
export type WzAlertLevel = 'page' | 'product';

type WzAlertActionProps = {
  actionText: string;
  onAction(): void;
} | { actionText?: never; onAction?: never; };
type WzAlertProps = {
  children: ReactNode;
  variant?: WzAlertVariant;
  customIcon?: ReactElement;
  level?: WzAlertLevel;
  multiline?: boolean;
  dismissText?: string;
  onDismiss?(): void;
} & WzAlertActionProps;

export function WzAlert(props: WzAlertProps) {
  const directAlertProps = pickProps(props, ['variant', 'level', 'multiline']);

  return (
    <Waze.IntrinsicElements.WzAlert
      {...directAlertProps}
      slotIcon={props.customIcon}
      slotDismiss={props.dismissText ? <span>{props.dismissText}</span> : undefined}
      slotAction={props.actionText ? <span>{props.actionText}</span> : undefined}

      onAlertDismissed={props.onDismiss}
      onActionClicked={props.onAction}
    >
      <div className="sidebar-alert-content">
        {props.children}
      </div>
    </Waze.IntrinsicElements.WzAlert>
  )
}
