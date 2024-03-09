import { Component, ComponentProps, ComponentType, EventHandler, HTMLAttributes, ReactEventHandler, ReactNode, SyntheticEvent, createElement, createRef } from 'react';
import { camelToPascalCase } from './case-converters';
import { omitProps } from './object-extraction';
import { getReactDisplayName } from './react-display-name';

type ReactEventsProps = Pick<HTMLAttributes<Element>, 'onChange' | 'onClick'>;

export function supportReactEvents<P extends ReactEventsProps, C extends ComponentType<P> = ComponentType<P>>(component: C): typeof Component<ComponentProps<C>> {
  const componentWithEvents = class extends Component<ComponentProps<C>> {
    private handleOnChange = this.createEventHandler('change');
    private handleOnClick = this.createEventHandler('click');
    private elementRef = createRef<Element>();

    constructor(props: ComponentProps<C>) {
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
          ref: this.elementRef,
          ...nonReactiveProps
        } as ComponentProps<C>,
        this.props.children,
      );
    }
  };
  (componentWithEvents as any).displayName = `WithReactEvents(${getReactDisplayName(component)})`;
  return componentWithEvents;
}
