import { Ref } from 'react';


function setRef<T>(ref: Ref<T>, value: T) {
  if (!ref) return;
  if (typeof ref === 'function') return ref(value);
  (ref as any).current = value;
}

export function mergeRefs<T>(...refs: Ref<T>[]): Ref<T> {
  return (newValue: T) => {
    refs.forEach((ref) => setRef(ref, newValue));
  }
}
