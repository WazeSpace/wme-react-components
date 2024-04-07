import { Component, ComponentProps, ComponentType, ForwardRefExoticComponent, HTMLAttributes, ReactNode, RefAttributes, SyntheticEvent, createElement, createRef } from 'react';
import { camelToPascalCase } from './case-converters';
import { omitProps } from './object-extraction';
import { getReactDisplayName } from './react-display-name';
import { createForwardRef } from './create-forward-ref';
import { mergeRefs } from './merge-refs';

type ReactEventsProps = Pick<HTMLAttributes<Element>, 'onChange' | 'onClick'>;
type RefTypeByComponent<C extends ComponentType<any>> = C extends ComponentType<RefAttributes<infer T>> ? T : never;

export function supportReactEvents<
  P extends ReactEventsProps,
  C extends ComponentType<P> = ComponentType<P>
>(component: C): ForwardRefExoticComponent<
  ComponentProps<C>
> {
  const componentWithEvents = class extends Component<ComponentProps<C> & { forwardedRef: RefTypeByComponent<C> }> {
    private handleOnChange = this.createEventHandler('change');
    private handleOnClick = this.createEventHandler('click');
    private elementRef = createRef<Element>();

    constructor(props: ComponentProps<C> & { forwardedRef: RefTypeByComponent<C> }) {
      super(props);
    }

    private createEventHandler(eventName: string) {
      return (event: Event) => {
        const propName = `on${camelToPascalCase(eventName)}` as const;
        if (typeof (this.props as any)[propName] === 'function') {
          (this.props as any)[propName]?.(event as unknown as SyntheticEvent);
        }
      }
    }

    get elementFromRef() {
      return this.elementRef.current;
    }

    componentDidMount(): void {
      if (!this.elementFromRef) return;
      this.elementFromRef.addEventListener('change', this.handleOnChange);
      this.elementFromRef.addEventListener('click', this.handleOnClick);
    }

    componentWillUnmount(): void {
      if (!this.elementFromRef) return;
      this.elementFromRef.removeEventListener('change', this.handleOnChange);
      this.elementFromRef.removeEventListener('click', this.handleOnClick);
    }

    render(): ReactNode {
      const nonReactiveProps = omitProps(this.props, ['onChange', 'onClick', 'children']);
      return createElement(
        component,
        {
          ref: mergeRefs(this.elementRef, this.props.forwardedRef as any),
          ...nonReactiveProps
        } as ComponentProps<C>,
        this.props.children,
      );
    }
  };
  (componentWithEvents as any).displayName = `WithReactEvents(${getReactDisplayName(component)})`;
  return createForwardRef(componentWithEvents) as any;
}
