import {
  AnyAction,
  CombinedState,
  configureStore,
  EnhancedStore,
  Reducer,
} from '@reduxjs/toolkit';
import { Context, createWrapper } from 'next-redux-wrapper';
import rootReducer, { InitState } from './modules';
import logger from 'redux-logger';

const store = configureStore({
  reducer: rootReducer as Reducer<CombinedState<InitState>, AnyAction>,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});

const setupStore = (context: any): EnhancedStore => store;
const makeStore = (context: Context) => setupStore(context);

export const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV !== 'production',
});

// export type RootState = ReturnType<typeof store.getState>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export default wrapper;
