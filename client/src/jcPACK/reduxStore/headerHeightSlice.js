import { createSlice } from "@reduxjs/toolkit";

const getHeaderHeight = () => "100px";
const initialState = getHeaderHeight();

export const headerHeightSlice = createSlice({
    name: "headerHeight",
    initialState,
    reducers: {
        setHeaderHeight: (state, action) => action.payload,
    },
});

export const { setHeaderHeight } = headerHeightSlice.actions;

export default headerHeightSlice.reducer;
