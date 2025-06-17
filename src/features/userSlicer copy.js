import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    token: null,
    isAuthenticated: false,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        registerSuccess: (state, action) => {
            state.currentUser = action.payload.user;
            state.token = action.payload.token;
            state.isAuthenticated = true;
        },
        loginSuccess: (state, action) => {
            state.currentUser = action.payload.user;
            state.token = action.payload.token;
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.currentUser = null;
            state.token = null;
            state.isAuthenticated = false;
        },
        updateUser: (state, action) => {
            state.currentUser = {
                ...state.currentUser,
                ...action.payload
            };
        }
    },
});

export const { registerSuccess, loginSuccess, logout, updateUser } = userSlice.actions;

// Selectors
export const selectCurrentUser = (state) => state.user.currentUser;
export const selectIsAuthenticated = (state) => state.user.isAuthenticated;
export const selectToken = (state) => state.user.token;

export default userSlice.reducer;