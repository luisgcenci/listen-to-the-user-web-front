import { configureStore } from '@reduxjs/toolkit';
import emailAuthSlice from 'store/features/emailAuthSlice';
import NavSlice from './features/navSlice';

export const store = configureStore({
  reducer: {
    navBar: NavSlice,
    emailAuth: emailAuthSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
