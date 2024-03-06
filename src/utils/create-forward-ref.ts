import { ComponentProps, ComponentType, ForwardRefRenderFunction, createElement, forwardRef } from 'react';
import { getReactDisplayName } from './react-display-name';

export function createForwardRef<C extends ComponentType<any>>(component: C) {
  const render: ForwardRefRenderFunction<HTMLElement, ComponentProps<C>> = (props, ref) => {
    return createElement(component, {
      ...props,
      forwardedRef: ref,
    });
  };
  render.displayName = getReactDisplayName(component);
  const forwardedRefComponent = forwardRef(render);
  return forwardedRefComponent;
}