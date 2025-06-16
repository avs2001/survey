export function manualEntryError(
  allow: boolean,
  value: string,
  min: number,
  max: number
): string {
  if (!allow) return '';
  if (!value) return '';
  if (min && value.length < min) {
    return `Minimum length is ${min}`;
  }
  if (max !== Infinity && value.length > max) {
    return `Maximum length is ${max}`;
  }
  return '';
}
