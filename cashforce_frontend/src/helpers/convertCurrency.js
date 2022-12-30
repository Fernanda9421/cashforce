export function convertCurrency(value) {
  if (String(value).includes(".")) {
    const splitValue = value.split(".");
    return `R$ ${new Intl.NumberFormat("de-DE").format(splitValue[0])},${
      splitValue[1]
    }`;
  }
  return `R$ ${new Intl.NumberFormat("de-DE").format(value)},00`;
}
