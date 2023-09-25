import { useState, useEffect, ReactNode } from 'react';
import ThemeContext, { initialThemeState } from '../contexts/themeContext';

interface ThemeProviderProps {
    children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<string>(initialThemeState.theme);

    const localStorage = window.localStorage;

    useEffect(() => {
        const savedThemeLocal = localStorage.getItem('globalTheme');

        if (!!savedThemeLocal) {
            setTheme(savedThemeLocal);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('globalTheme', theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <div className={`theme--${theme}`}>{children}</div>
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
