import { ComponentProps, ReactNode } from 'react';

type HTMLAnchorElementProps = ComponentProps<'a'>;

export interface WzAnchorProps {
  /** Indicates whether an "external link" icon should be shown */
  withIcon?: boolean;

  /** Specifies the URL of the page the link goes to */
  href?: string;

  /** Specifies where to open the linked document (default: _self) */
  target?: HTMLAnchorElementProps['target'];

  /** Specifies the relationship between the current document and the linked document */
  rel?: HTMLAnchorElementProps['rel'];

  disabled?: boolean;

  children: ReactNode;
}
