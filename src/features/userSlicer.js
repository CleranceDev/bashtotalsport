import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: [],
  token: null, // Store the token as well
};

const createUserSLice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    registeredSuccess: (state, action) => {
      state.currentUser = action.payload;
    },
    loginUser: (state, action) => {
      const { user, token } = action.payload;
      state.currentUser = user; // Store user details
      state.token = token; // Store the token
    },
    logout: (state) => {
      state.currentUser = [];
      state.token = null; // Clear token on logout
    },
  },
});

export const { registeredSuccess, loginUser, logout } = createUserSLice.actions;
export default createUserSLice.reducer;
