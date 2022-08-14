import isSelected from './isSelected';
import isThisWeek from './isThisWeek';
import isToday from './isToday';

type Calendar = {
  select: Date;
  current: Date;
};

export default function getCalendar({ select, current }: Calendar) {
  // this month calendar days
  const days = [];

  const today = new Date();

  const currYear = current.getFullYear();
  const currMonth = current.getMonth();
  const currDate = current.getDate();

  // first & last date of current month
  const firstDate = new Date(currYear, currMonth, 1);
  const lastDate = new Date(currYear, currMonth + 1, 0);

  // first & last day of current month
  let firstDay = firstDate.getDay();
  let lastDay = lastDate.getDay();

  // preview date for prev month of current month calendar
  if (firstDay !== 0) {
    // last day of prev month
    const lastDateOfPrevMonth = new Date(currYear, currMonth, 0);
    for (let i = firstDay - 1; i >= 0; i--) {
      const year = lastDateOfPrevMonth.getFullYear();
      const month = lastDateOfPrevMonth.getMonth();
      const date = lastDateOfPrevMonth.getDate() - i;
      const fullDate = new Date(year, month, date);

      days.push({
        fullDate: fullDate.toString(),
        date: date,
        day: fullDate.getDay(),
        isToday: isToday(fullDate, today),
        isSelected: isSelected(select, fullDate),
        isThisWeek: isThisWeek(fullDate, current),
        isCurrMonth: false,
      });
    }
  }

  // days of current month
  for (let i = firstDate.getDate(); i <= lastDate.getDate(); i++) {
    const year = current.getFullYear();
    const month = current.getMonth();
    const date = i;
    const fullDate = new Date(year, month, date);

    days.push({
      fullDate: fullDate.toString(),
      date: date,
      day: fullDate.getDay(),
      isToday: isToday(fullDate, today),
      isSelected: isSelected(select, fullDate),
      isThisWeek: isThisWeek(fullDate, current),
      isCurrMonth: true,
    });
  }

  // preview date for next month of current month calendar
  if (lastDay !== 6) {
    // last day of prev month
    const firstDateOfNextMonth = new Date(currYear, currMonth + 1, 1);
    for (let i = 0; i < 7 - (lastDay + 1); i++) {
      const year = firstDateOfNextMonth.getFullYear();
      const month = firstDateOfNextMonth.getMonth();
      const date = i + 1;
      const fullDate = new Date(year, month, date);

      days.push({
        fullDate: fullDate.toString(),
        date: date,
        day: fullDate.getDay(),
        isToday: isToday(fullDate, today),
        isSelected: isSelected(select, fullDate),
        isThisWeek: isThisWeek(fullDate, current),
        isCurrMonth: false,
      });
    }
  }

  return { days, month: currMonth + 1, year: currYear };
}

export function getNewDate(select: Date) {
  const year = select.getFullYear();
  const month = select.getMonth() + 1;
  const date = select.getDate();
  const day = select.getDay();

  return { year, month, date, day };
}
