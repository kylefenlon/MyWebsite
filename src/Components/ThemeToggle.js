import React, { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import "../CSS/ThemeToggle.css";

const getInitialTheme = () => {
    if (typeof document === "undefined") return "light";
    const fromDom = document.documentElement.dataset.theme;
    return fromDom === "dark" ? "dark" : "light";
};

const ThemeToggle = () => {
    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        try {
            localStorage.setItem("theme", theme);
        } catch (e) {
            // localStorage can throw in private mode / disabled storage — safe to ignore
        }
    }, [theme]);

    const isDark = theme === "dark";
    const toggle = () => setTheme(isDark ? "light" : "dark");

    return (
        <button
            type="button"
            className="themeToggle"
            onClick={toggle}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            aria-pressed={isDark}
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
            <FiMoon
                aria-hidden="true"
                className={`themeToggleIcon themeToggleIconMoon ${isDark ? "isHidden" : "isVisible"}`}
            />
            <FiSun
                aria-hidden="true"
                className={`themeToggleIcon themeToggleIconSun ${isDark ? "isVisible" : "isHidden"}`}
            />
        </button>
    );
};

export default ThemeToggle;
