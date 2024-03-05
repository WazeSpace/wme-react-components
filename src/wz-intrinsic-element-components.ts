import { createReactComponent } from './utils/create-react-component';
import {
  WzAnchorProps,
} from './wme-intrinsic-elements-props';

export namespace Waze.IntrinsicElements {
  export const WzAnchor = createReactComponent<'', WzAnchorProps>('wz-a');
}
