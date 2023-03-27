const money = "BRL";
export function formatReal(int, lang = "pt-BR", dec = 2) {
  if (isNaN(parseFloat(int))) {
    int = 0;
  }
  return new Intl.NumberFormat(lang, {
    style: "currency",
    currency: money,
    minimumFractionDigits: dec,
    maximumFractionDigits: dec,
  }).format(int);
}

export function formatPercent(number, dec = 2) {
  if (isNaN(parseFloat(number))) {
    return "-";
  }
  return `${formatNumber(number, dec)}%`;
}

export function formatNumber(number, dec = 2, lang = "pt-BR") {
  return new Intl.NumberFormat(lang, {
    minimumFractionDigits: dec,
    maximumFractionDigits: dec,
  }).format(number);
}
