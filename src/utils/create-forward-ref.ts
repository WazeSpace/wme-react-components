import { ComponentProps, ComponentType, createElement, forwardRef, ForwardRefRenderFunction, RefAttributes } from 'react';
import { getReactDisplayName } from './react-display-name';

export function createForwardRef<T = HTMLElement, C extends ComponentType<any> = ComponentType<any>>(component: C) {
  const render: ForwardRefRenderFunction<HTMLElement, ComponentProps<C>> = (props, ref) => {
    return createElement(component, {
      ...props,
      forwardedRef: ref,
    });
  };
  render.displayName = getReactDisplayName(component);
  return forwardRef<T, ComponentProps<C>>(render as any);
}
