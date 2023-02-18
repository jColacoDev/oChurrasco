import { createSlice } from "@reduxjs/toolkit";

const getTheme = () => {
    const theme = localStorage.getItem("theme");
    if (["lightTheme", "darkTheme"].includes(theme)) return theme;

    const userMedia = window.matchMedia("(prefers-color-scheme: light)");
    if (userMedia.matches) return "lightTheme";

    return "darkTheme";
};
const initialState = getTheme();

export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        setTheme: (state, action) => action.payload,
    },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
