import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import appPathReducer from "./appSlice";
import headerHeightReducer from "./headerHeightSlice"

const store = configureStore({
    reducer: {
        theme: themeReducer,
        appPath: appPathReducer,
        headerHeight: headerHeightReducer,
    },
});

export default store;
