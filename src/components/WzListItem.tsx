import { ComponentProps, ReactNode } from 'react';
import { Waze } from '../wz-intrinsic-element-components';

interface WzListItemProps {
  itemKey?: string | ReactNode;
  value?: string | ReactNode;
  subtitle?: string | ReactNode;
  image?: string | ReactNode;
  clickable?: boolean;
  disabled?: boolean;
  selected?: boolean;
  expanded?: boolean;
  children?: ReactNode;
}

const propToSlotMap: Partial<Record<keyof WzListItemProps, keyof ComponentProps<typeof Waze.IntrinsicElements.WzListItem>>> = {
  itemKey: 'slotItemKey',
  value: 'slotValue',
  subtitle: 'slotSubtitle',
  image: 'slotImage',
};
const propToIntrinsicPropMap: Partial<Record<keyof WzListItemProps, keyof ComponentProps<typeof Waze.IntrinsicElements.WzListItem>>> = {
  image: 'imageSrc',
}

export function WzListItem({ children, ...props }: WzListItemProps) {
  const propToSlotOrAttributeEntry = (propName: keyof typeof props) => {
    const propValue = props[propName];
    if (!propValue) return null;
    if (typeof propValue === 'string' || typeof propValue === 'number') {
      // should be set as an attribute
      const intrinsicPropName = propToIntrinsicPropMap[propName] ?? propName;
      return [intrinsicPropName, propValue] as const;
    }
    // should be set as a slot
    const slotPropName = propToSlotMap[propName];
    if (!slotPropName) return null;
    return [slotPropName, propValue] as const;
  }

  const contentPropsNames = Object.keys(props) as Array<keyof typeof props>;
  const intrinsicProps = Object.fromEntries(removeNulls(contentPropsNames.map(propToSlotOrAttributeEntry)));

  return (
    <Waze.IntrinsicElements.WzListItem {...intrinsicProps}>
      {children}
    </Waze.IntrinsicElements.WzListItem>
  )
}

function removeNulls<T>(array: Array<T | null>): T[] {
  return array.filter((item) => item !== null) as T[];
}
