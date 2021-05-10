const NumberFormat = (value) =>
  new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumSignificantDigits: 4,
  }).format(value);

export default NumberFormat;
