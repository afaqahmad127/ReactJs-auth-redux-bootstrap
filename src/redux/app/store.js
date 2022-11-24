import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import appReducer from '../features/app/app.slice';
import authReducer from '../features/auth/auth.slice';

export const store = configureStore({
  reducer: {
    app: appReducer,
    auth: authReducer,
    counter: counterReducer,
  },
});
