import { ComponentType } from 'react';

export function getReactDisplayName(component: ComponentType<any> | string | { render: ComponentType }): string | undefined {
  if (typeof component === 'string') return component;
  if (typeof component === 'function') {
    if (component.displayName) return component.displayName;
    if (component.name) return component.name;
    return undefined;
  }
  if (component.render) return getReactDisplayName(component.render);
}