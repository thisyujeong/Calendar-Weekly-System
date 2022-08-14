/**
 * @param {string} date Current Date
 * @param {number} value Value to move from current month
 */
export default function getMonth(date: string, value: number) {
  const currDate = new Date(date);
  currDate.setDate(1);
  currDate.setMonth(currDate.getMonth() - value);
  return currDate.toString();
}
