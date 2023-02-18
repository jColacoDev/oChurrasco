import { createSlice } from "@reduxjs/toolkit";

const getAppPath = () => "myAppPath"

const initialState = getAppPath();

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setAppPath: (state, action) => action.payload,
    },
});

export const { setAppPath } = appSlice.actions;

export default appSlice.reducer;
