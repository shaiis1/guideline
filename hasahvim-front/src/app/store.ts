import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import messagesSlice from './slices/messagesSlice';
import workersSlice from './slices/workersSlice';

export const store = configureStore({
  reducer: {
      workers: workersSlice,
      messages: messagesSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
