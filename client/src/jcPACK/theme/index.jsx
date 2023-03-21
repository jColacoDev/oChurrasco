import React from "react";
import { useSelector } from "react-redux";
import cn from "classnames";
import styles from "./index.module.scss";

export default function Theme({ className }) {
    const [theme, setTheme] = React.useState("darkTheme");

    const themeSelector = useSelector((state) => state.theme);

    React.useEffect(() => {
        setTheme(themeSelector);
        document.documentElement.dataset.theme = theme;
    }, []);

    React.useEffect(() => {
        setTheme(themeSelector);
        document.documentElement.dataset.theme = themeSelector;
        localStorage.setItem("theme", themeSelector);
    }, [themeSelector]);

    return (
        <div className={cn(
            className,
            styles.root,
            theme === "darkTheme" ? styles.darkTheme : styles.lightTheme
        )}/>
    );
};