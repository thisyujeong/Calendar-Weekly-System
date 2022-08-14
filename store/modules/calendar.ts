import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';
import getCalendar from '../../utils/getCalendar';
import getMonth from '../../utils/getMonth';
import getWeek from '../../utils/getWeek';

export interface CurrentCalendar {
  fullDate: string;
  days: Days[];
  month: number;
  year: number;
}

export interface Calendar {
  select: string;
  current: CurrentCalendar;
}

const today = new Date();
const initCalendar = getCalendar({ select: today, current: today });

const initialState: Calendar = {
  select: today.toString(),
  current: {
    fullDate: new Date(today).toString(),
    days: initCalendar.days,
    month: initCalendar.month,
    year: initCalendar.year,
  },
};

const createDate = ({ select, current }: { select: string; current: string }) => {
  return getCalendar({ select: new Date(select), current: new Date(current) });
};

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    nextMonth: (state) => {
      const next = getMonth(state.current.fullDate, 1);
      const getNewDate = createDate({ select: state.select, current: next });
      state.current = {
        fullDate: next,
        ...getNewDate,
      };
    },
    prevMonth: (state) => {
      const prev = getMonth(state.current.fullDate, -1);
      const getNewDate = createDate({ select: state.select, current: prev });
      state.current = {
        fullDate: prev,
        ...getNewDate,
      };
    },
    nextWeek: (state) => {
      const next = getWeek(state.current.fullDate, 1);
      const getNewDate = createDate({ select: state.select, current: next });
      state.current = {
        fullDate: next,
        ...getNewDate,
      };
    },
    prevWeek: (state) => {
      const prev = getWeek(state.current.fullDate, -1);
      const getNewDate = createDate({ select: state.select, current: prev });
      state.current = {
        fullDate: prev,
        ...getNewDate,
      };
    },
    selectDate: (state, action: PayloadAction<string>) => {
      state.select = action.payload;

      const selectDate = new Date(action.payload);
      const getNewDate = getCalendar({ select: selectDate, current: selectDate });
      state.current = {
        fullDate: selectDate.toString(),
        ...getNewDate,
      };
    },
  },
});

export const { nextMonth, prevMonth, nextWeek, prevWeek, selectDate } =
  calendarSlice.actions; // 액션 생성함수
export const currCalendar = (state: RootState) => state.calendar.current;

export default calendarSlice.reducer; // 리듀서
