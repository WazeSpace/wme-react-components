import React, { Component, ForwardRefExoticComponent, HTMLAttributes, ReactElement, ReactNode, RefAttributes } from 'react';
import { DashToPascal, camelToDashCase, dashToPascalCase, pascalToDashCase } from './case-converters';
import { attachPropsToDOMElement, isEventCoveredByReact } from './custom-element-synchronizer';
import { mergeRefs } from './merge-refs';
import { createForwardRef } from './create-forward-ref';


type SlotNameToProperty<S extends string> = S extends '' ? never : `slot${DashToPascal<S>}`; //S extends `${infer I}${infer R}` ? `slot${Capitalize<I>}${R}` : never;

type SlotsPropsFromSlotNames<S extends string> = {
  [K in SlotNameToProperty<S>]?: ReactElement;
}

export function createReactComponent<T = HTMLElement, S extends string = '', P = Record<string, any>>(
  elementTag: keyof JSX.IntrinsicElements,
): ForwardRefExoticComponent<SlotsPropsFromSlotNames<S> & P & HTMLAttributes<HTMLElement> & RefAttributes<T>> {
  const componentName = dashToPascalCase(elementTag);
  const ElementComponent = class extends Component<any> {
    private componentElement: Element | null = null;
    private setComponentElement = (element: Element) => this.componentElement = element;

    componentDidMount(): void {
      this.componentDidUpdate?.(this.props);
    }

    componentDidUpdate(prevProps: Readonly<{}>): void {
      if (this.componentElement)
        attachPropsToDOMElement(this.componentElement, this.props, prevProps);
    }

    render(): ReactNode {
      const { children, forwardedRef, style, className, ref, ...otherProps } = this.props;

      const slotsContent = new Map<string, ReactElement>();
      const processedProps = Object.keys(otherProps).reduce((accumulatedProps, propName) => {
        const propValue = otherProps[propName];
    
        if (propName.indexOf("on") === 0 && propName[2] === propName[2].toUpperCase()) {
          const eventName = propName.substring(2).toLowerCase();
    
          // Check if the event is covered by React before adding it
          if (typeof document !== "undefined" && isEventCoveredByReact(eventName)) {
            accumulatedProps[propName] = propValue;
          }
        } else if (propName.toLowerCase() !== 'slot' && propName.startsWith('slot') && propName[4] === propName[4].toUpperCase()) {
          const slotName = propName.substring(4);
          const originalSlotName = pascalToDashCase(slotName);
          slotsContent.set(originalSlotName, propValue);
        } else {
          const valueType = typeof propValue;
    
          // Include only string, boolean, and number types in the processedProps
          if (valueType === "string" || valueType === "boolean" || valueType === "number") {
            accumulatedProps[camelToDashCase(propName)] = propValue;
          }
        }
    
        return accumulatedProps;
      }, {} as any);

      const finalProps = {
        ...processedProps,
        style,
        ref: mergeRefs(forwardedRef, this.setComponentElement),
      };

      const elementChildren = (
        <>
          {children}
          {Array.from(slotsContent.keys()).map((slotName) => {
            const slotValue = slotsContent.get(slotName);
            if (!slotValue) return null;
            return React.cloneElement(slotValue, {
              ...slotValue?.props,
              slot: slotName,
            })
          })}
        </>
      )

      return React.createElement(elementTag, finalProps, elementChildren);
    }

    static get displayName() {
      return componentName;
    }
  }

  return createForwardRef(ElementComponent);
}
