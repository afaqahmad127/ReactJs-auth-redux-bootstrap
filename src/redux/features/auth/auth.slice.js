import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  startLoading,
  stopLoading,
  setUserToken,
  requestFailed,
  requestSucceeded,
  setCurrentUser,
} from '../app/app.slice';
import { login, profile, signUp } from './auth.api';
// import { fetchCount } from './counterAPI';

const initialState = {
  value: 0,
  status: 'idle',
};

export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount) => {
    // const response = await fetchCount(amount);
    // return response.data;
  }
);

export const counterSlice = createSlice({
  name: 'counter',
  initialState,

  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },

    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value += action.payload;
      });
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const selectCount = (state) => state.counter.value;

export const userLogin =
  ({ email, password }) =>
  async (dispatch, getState) => {
    dispatch(startLoading());
    try {
      const res = await login({ email, password });
      dispatch(setUserToken(res.access_token));
      dispatch(requestSucceeded());
      window.location.href = '/';
    } catch (err) {
      dispatch(requestFailed(err.response.data.message));
    }
    dispatch(stopLoading());
  };
export const userSignUp = (body) => async (dispatch, getState) => {
  const { navigate } = body;
  dispatch(startLoading());
  try {
    const res = await signUp(body);
    dispatch(setUserToken(res.access_token));
    dispatch(requestSucceeded());
    navigate('/');
  } catch (err) {
    const message = err.response.data.message;
    dispatch(requestFailed(Array.isArray(message) ? message[0] : message));
  }
  dispatch(stopLoading());
};
export const userProfile = () => async (dispatch, getState) => {
  dispatch(startLoading());
  try {
    const res = await profile();
    dispatch(setCurrentUser(res));
    dispatch(requestSucceeded());
  } catch (err) {
    const message = err.response.data.message;
    dispatch(requestFailed(message));
    if (message === 'Unauthorized') {
      sessionStorage.clear();
      window.location.href = '/';
    }
  }
  dispatch(stopLoading());
};

export default counterSlice.reducer;
