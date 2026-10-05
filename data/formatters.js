/**
 * Deterministic financial number formatter.
 * Guarantees identical output on both SSR (Node.js) and Client (Browser)
 * regardless of host operating system or browser locale, preventing React hydration mismatches.
 */
export function formatCurrencyNumber(val, currency = "₹") {
  if (val === null || val === undefined || isNaN(val)) return "0";
  const num = Math.round(Number(val));
  const sign = num < 0 ? "-" : "";
  const abs = Math.abs(num).toString();

  if (currency === "₹") {
    // Indian numbering format (e.g. 1,48,250)
    const lastThree = abs.slice(-3);
    const rest = abs.slice(0, -3);
    const formatted =
      rest !== ""
        ? rest.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + "," + lastThree
        : lastThree;
    return `${sign}${formatted}`;
  }

  // Standard 3-digit comma format (e.g. 148,250)
  return `${sign}${abs.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
}
