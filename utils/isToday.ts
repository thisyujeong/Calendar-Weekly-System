export default function isToday(date: Date, today: Date): boolean {
  const compareYear = date.getFullYear() === today.getFullYear();
  const compareMonth = date.getMonth() === today.getMonth();
  const compareDate = date.getDate() === today.getDate();

  return compareYear && compareMonth && compareDate;
}
