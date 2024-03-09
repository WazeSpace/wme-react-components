import { ComponentProps, ComponentType, createElement, forwardRef, ForwardRefRenderFunction } from 'react';
import { getReactDisplayName } from './react-display-name';

export function createForwardRef<C extends ComponentType<any>>(component: C) {
  const render: ForwardRefRenderFunction<HTMLElement, ComponentProps<C>> = (props, ref) => {
    return createElement(component, {
      ...props,
      forwardedRef: ref,
    });
  };
  render.displayName = getReactDisplayName(component);
  return forwardRef(render);
}
