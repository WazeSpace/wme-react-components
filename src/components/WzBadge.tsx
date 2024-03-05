import { HTMLAttributes, ReactNode } from 'react';
import { Waze } from '../wz-intrinsic-element-components';
import { WzBadgeNativeColor, WzBadgeNativeColorsArray, WzBadgeNativeSize } from '../wme-intrinsic-elements-props';

type WzBadgeWithDotProps = {
  hasDot: true;
  color?: WzBadgeNativeColor | string;
}
type WzBadgeWithoutDotProps = {
  hasDot?: false;
  color?: never;
}
type WzBadgeProps = HTMLAttributes<HTMLElement> & {
  emphasized?: boolean;
  size?: WzBadgeNativeSize;
  children: ReactNode;
} & (WzBadgeWithDotProps | WzBadgeWithoutDotProps);

export function WzBadge(props: WzBadgeProps) {
  const { color, style = {}, ...rest } = props;

  const isNativeColor = isNativeBadgeColor(color);
  
  if (color && !isNativeColor) {
    style['--wz-badge-dot-color'] = color;
  }

  return (
    <Waze.IntrinsicElements.WzBadge
      color={isNativeColor ? color : undefined}
      style={style}
      {...rest}
    />
  )
}

function isNativeBadgeColor(color: string | undefined): color is WzBadgeNativeColor {
  if (!color) return true; // in case there is no color provided, the default one will be choosed, hence it is a native color
  return (WzBadgeNativeColorsArray as readonly string[]).includes(color);
}
