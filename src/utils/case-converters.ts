export type DashToPascal<S extends string> = 
  S extends `${infer First}-${infer Rest}`
    ? `${Capitalize<First>}${DashToPascal<Rest>}`
    : Capitalize<S>;


export function dashToPascalCase(value: string): string {
  const valueLowered = value.toLowerCase();
  const valueComponents = valueLowered.split('-');
  const valueComponentPascalCased = valueComponents.map((component) => {
    const capitalInitial = component.charAt(0).toUpperCase();
    const rest = component.slice(1);
    return capitalInitial + rest;
  })
  return valueComponentPascalCased.join('');
}

export function camelToDashCase(value: string): string {
  return value.replace(/([A-Z])/g, (capitalLetter) => `-${capitalLetter.toLowerCase()}`);
}

export function camelToPascalCase(value: string): string {
  return value[0].toUpperCase() + value.slice(1);
}

export function pascalToDashCase(value: string): string {
  const valueInCamelCase = value[0].toLowerCase() + value.substring(1);
  return camelToDashCase(valueInCamelCase);
}
