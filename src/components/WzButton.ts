import { ComponentProps } from 'react';
import { supportReactEvents } from '../utils/support-react-events';
import { Waze } from '../wz-intrinsic-element-components';

export const WzButton = supportReactEvents<ComponentProps<typeof Waze.IntrinsicElements.WzButton>>(Waze.IntrinsicElements.WzButton);
