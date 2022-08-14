export default function isSelected(select: Date, date: Date): boolean {
  const compareYear = select.getFullYear() === date.getFullYear();
  const compareMonth = select.getMonth() === date.getMonth();
  const compareDate = select.getDate() === date.getDate();

  return compareYear && compareMonth && compareDate;
}
