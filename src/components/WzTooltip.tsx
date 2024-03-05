import { ReactNode } from 'react';

interface WzTooltipProps {
  children: ReactNode;
  tooltipContent: string;
}
export function WzTooltip({ children, tooltipContent }: WzTooltipProps) {
  return (
    <wz-basic-tooltip>
      <wz-tooltip-source>
        {children}
      </wz-tooltip-source>
      <wz-tooltip-target />
      <wz-tooltip-content>{tooltipContent}</wz-tooltip-content>
    </wz-basic-tooltip>
  )
}
