import { useEffect, useState } from 'react';
import { currCalendar } from '../../store/modules/calendar';
import { useAppSelector } from '../../utils/hooks';
import dynamic from 'next/dynamic';
import getThisWeek from '../../utils/getThisWeek';
import * as S from './Weekly.style';

const WeeklyItem = dynamic(() => import('./WeeklyItem'), {
  ssr: false,
});

interface WeeklyProps {}

const Weekly = ({}: WeeklyProps) => {
  const { days } = useAppSelector(currCalendar);
  const [weekDays, setWeekDays] = useState(getThisWeek(days));

  useEffect(() => {
    setWeekDays(getThisWeek(days));
  }, [days]);

  return (
    <S.WeeklyContainer>
      {weekDays.map((d, i) => {
        return <WeeklyItem key={d.date} day={d} />;
      })}
    </S.WeeklyContainer>
  );
};

export default Weekly;
