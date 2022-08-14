import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  currCalendar,
  nextMonth,
  prevMonth,
  selectDate,
} from '../../store/modules/calendar';
import { dayOfWeekKo } from '../../utils/dayOfWeek';
import {
  CalendarContainer,
  CalendarExplore,
  ExploreDate,
  ExploreControl,
  CalendarTable,
} from './Calendar.style';

const Calendar = () => {
  const dispatch = useDispatch();
  const { month, year, days } = useSelector(currCalendar);

  const onClickDate = (date: Days) => dispatch(selectDate(date.fullDate));
  const onClickPrev = () => dispatch(nextMonth());
  const onClickNext = () => dispatch(prevMonth());

  return (
    <CalendarContainer>
      <CalendarExplore>
        <ExploreDate>
          {year}년 {month}월
        </ExploreDate>
        <ExploreControl>
          <span className="prev" onClick={onClickPrev}>
            이전 달 보기 버튼
          </span>
          <span className="next" onClick={onClickNext}>
            다음 달 보기 버튼
          </span>
        </ExploreControl>
      </CalendarExplore>
      <CalendarTable>
        <thead>
          <tr>
            {dayOfWeekKo.map((day, i) => (
              <th key={i}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {days.map(
            (day: Days, i: number): React.ReactElement => (
              <React.Fragment key={i}>
                {i % 7 === 0 && (
                  <tr>
                    {days.slice(i, i + 7).map(
                      (d: Days): React.ReactElement => (
                        <td
                          key={d.date}
                          data-view={d.isCurrMonth ? true : false}
                          data-selected={d.isSelected ? true : false}
                          className={d.isToday ? 'today' : ''}
                          onClick={() => onClickDate(d)}
                        >
                          <span>{d.date}</span>
                        </td>
                      )
                    )}
                  </tr>
                )}
              </React.Fragment>
            )
          )}
        </tbody>
      </CalendarTable>
    </CalendarContainer>
  );
};

export default Calendar;
