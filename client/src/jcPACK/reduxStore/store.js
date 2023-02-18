import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import appPathReducer from "./appSlice";

const store = configureStore({
    reducer: {
        theme: themeReducer,
        appPath: appPathReducer,
    },
});

export default store;
