import { useDispatch, useSelector } from 'react-redux';
import {
  currCalendar,
  nextWeek,
  prevWeek,
  selectDate,
} from '../../store/modules/calendar';
import dateFormat from '../../utils/dateFormat';
import {
  CalendarHeadingContainer,
  HeadingDate,
  HeadingExploreControl,
  TodayBtn,
} from './CalendarHeading.style';

const CalendarHeading = () => {
  const dispatch = useDispatch();
  const calendar = useSelector(currCalendar);
  const { month, year } = dateFormat(calendar.fullDate);

  const onClickPrev = () => dispatch(prevWeek());
  const onClickNext = () => dispatch(nextWeek());
  return (
    <CalendarHeadingContainer>
      <HeadingDate>{`${month} ${year}`}</HeadingDate>
      <TodayBtn onClick={() => dispatch(selectDate(new Date().toString()))}>
        Today
      </TodayBtn>
      <HeadingExploreControl>
        <span className="prev" onClick={onClickPrev}>
          이전 달 보기 버튼
        </span>
        <span className="next" onClick={onClickNext}>
          다음 달 보기 버튼
        </span>
      </HeadingExploreControl>
    </CalendarHeadingContainer>
  );
};

export default CalendarHeading;
