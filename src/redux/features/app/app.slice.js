import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  status: 'idle',
  errorMessage: '',
  currentUser: {},
  isUserAuthenticated: false,
  userToken: '',
};

export const counterSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    stopLoading: (state) => {
      state.loading = false;
    },
    requestFailed: (state, action) => {
      state.status = 'error';
      state.errorMessage = action.payload;
    },
    requestSucceeded: (state) => {
      state.status = 'success';
    },
    refreshApiStates: (state) => {
      state.loading = false;
      state.status = 'idle';
      state.errorMessage = '';
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    setUserToken: (state, action) => {
      state.userToken = action.payload;
      state.isUserAuthenticated = true;
      sessionStorage.setItem('token', state.userToken);
    },
  },
});

export const {
  startLoading,
  stopLoading,
  setUserToken,
  setCurrentUser,
  refreshApiStates,
  requestSucceeded,
  requestFailed,
} = counterSlice.actions;

export const loading = (state) => state.app.loading;
export const token = (state) => state.app.userToken;
export const user = (state) => state.app.currentUser;
export const errorMessage = (state) => state.app.errorMessage;
export const status = (state) => state.app.status;

export default counterSlice.reducer;
