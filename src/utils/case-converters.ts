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
