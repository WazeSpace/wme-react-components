export function pickProps<T extends object, K extends keyof T>(obj: T, keysToExtract: Array<K>): Pick<T, K> {
  const extractedObject: Pick<T, K> = {} as Pick<T, K>;
  keysToExtract.forEach((key) => {
    extractedObject[key] = obj[key];
  });
  return extractedObject;
}

export function omitProps<T extends object, K extends keyof T>(obj: T, keysToOmit: Array<K>): Omit<T, K> {
  const keysToOmitSet = new Set<keyof T>(keysToOmit);
  const omittedObject: Omit<T, K> = {} as Omit<T, K>;
  (Object.keys(obj) as Array<keyof T>).forEach((key) => {
    if (keysToOmitSet.has(key)) return;
    (omittedObject as any)[key] = obj[key];
  });

  return omittedObject;
}
