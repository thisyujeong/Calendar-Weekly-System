/**
 * @param {string} date Current Date
 * @param {number} value Value to move from current Week
 */
export default function getWeek(date: string, value: number) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + value * 7);
  return newDate.toString();
}
