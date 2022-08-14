import { AnyAction, combineReducers } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import calendar, { Calendar } from './calendar';

export interface InitState {
  calendar: Calendar;
}

const rootReducer = (state: InitState, action: AnyAction) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  }
  return combineReducers({
    calendar,
  })(state, action);
};

export default rootReducer;
