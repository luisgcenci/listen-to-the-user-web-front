import { configureStore } from '@reduxjs/toolkit';
import NavSlice from '../features/navSlice';

export const store = configureStore({
  reducer: {
    navBar: NavSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
