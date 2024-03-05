import { camelToDashCase } from './case-converters';

export function attachPropsToDOMElement(element: Element, newProps: any, oldProps: any) {
  const modifiedClassName = getClassName(element.classList, newProps, oldProps);
  if (modifiedClassName) element.className = modifiedClassName;

  Object.keys(newProps).forEach((propKey) => {
    if (
      propKey === 'children' || 
      propKey === 'style' || 
      propKey === 'ref' ||
      propKey === 'class' ||
      propKey === 'className' ||
      propKey === 'forwardedRef'
    ) return;

    const propValue = newProps[propKey];

    if (propKey.startsWith('on') && propKey[2] === propKey[2].toUpperCase()) {
      // this is an event handler registrator
      const eventName = propKey.substring(2);
      const normalizedEventName = eventName.charAt(0).toLowerCase() + eventName.substring(1);

      if (!isEventCoveredByReact(normalizedEventName)) {
        syncEvent(element as any, normalizedEventName, propValue);
      }

      return;
    }

    (element as any)[propKey] = propValue;
    // non-event property (attribute)
    if (typeof propValue === 'string') {
      // we can deal with it and assign as an attribute
      const attributeName = camelToDashCase(propKey);
      element.setAttribute(attributeName, propValue);
    }
  });
}

function getClassName(classList: DOMTokenList, newProps: any, oldProps: any) {
  const includeClassNames = newProps.className || newProps.class;
  const excludeClassNames = oldProps.className || oldProps.class;

  const classListTokenSet = new Set<string>(classList);
  const includeClassNamesSet = new Set<string>(includeClassNames?.split?.(' ') ?? []);
  const excludeClassNamesSet = new Set<string>(excludeClassNames?.split?.(' ') ?? []);

  const classNamesToJoin: string[] = [];

  classListTokenSet.forEach((token) => {
    if (includeClassNamesSet.has(token)) {
      classNamesToJoin.push(token);
      includeClassNamesSet.delete(token);
    } else if (!excludeClassNamesSet.has(token)) {
      classNamesToJoin.push(token);
    }
  });

  includeClassNamesSet.forEach((className) => classNamesToJoin.push(className));
  return classNamesToJoin.join(' ');
}

function transformReactEventName(eventName: string) {
  if (eventName === 'doubleclick') return 'dblclick';
  return eventName;
}

export function isEventCoveredByReact(eventName: string): boolean {
  if (typeof document === 'undefined') return true;
  const properEventName = transformReactEventName(eventName);
  const properEventPropertyName = 'on' + properEventName;

  if (properEventPropertyName in document) return true;
  const dummyElement = document.createElement('div');
  dummyElement.setAttribute(properEventPropertyName, 'return;');
  return typeof (dummyElement as any)[properEventPropertyName] === 'function';
}

function syncEvent(element: Element & { __events: any }, eventName: string, eventHandler?: Function) {
  const eventsRepository = element.__events || (element.__events = {});
  const registeredEventHandler = eventsRepository[eventName];
  if (registeredEventHandler) element.removeEventListener(eventName, registeredEventHandler);

  const newEventHandler = function (this: unknown, event: unknown) {
    eventHandler?.call(this, event);
  }

  registeredEventHandler[eventName] = newEventHandler;
  element.addEventListener(eventName, newEventHandler);
}
