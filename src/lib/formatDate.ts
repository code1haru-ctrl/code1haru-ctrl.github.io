const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** "2026-07" -> "Jul 2026" */
export function formatDate(value: string): string {
  const [year, month] = value.split("-");
  const label = MONTHS[Number(month) - 1];
  return label ? `${label} ${year}` : year;
}
