import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
};

export const middlewareSlice = createSlice({
  name: 'middleware',
  initialState,
  reducers: {
    startMiddleware: (state) => {
      console.log('STARTED MIDDLEWARE');
    },
  },
});

export const { startMiddleware } = middlewareSlice.actions;

export default middlewareSlice.reducer;
