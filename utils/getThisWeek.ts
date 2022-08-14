export default function getThisWeek(days: Days[]): Days[] {
  const thisWeekDays = days.filter((day) => day.isThisWeek === true);
  return thisWeekDays;
}
