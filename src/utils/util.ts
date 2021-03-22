export function isValidSearch(value: string) {
  const hasComma = value.includes(",");
  const stringArray = value.split(",");
  return stringArray.length === 2 && hasComma;
}
