export const WzBadgeNativeColorsArray = ["blue", "green", "grey", "light-green", "orange", "purple", "red", "yellow"] as const;
export const WzBadgeNativeSizesArray = ["sm", "md"] as const;

export type WzBadgeNativeColor = typeof WzBadgeNativeColorsArray[number];
export type WzBadgeNativeSize = typeof WzBadgeNativeSizesArray[number];

export interface WzBadgeProps {
  emphasized?: boolean;
  size?: WzBadgeNativeSize;
  color?: WzBadgeNativeColor;
  hasDot?: boolean;
}
