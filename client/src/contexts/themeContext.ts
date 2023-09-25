// ThemeContext.js
import React from 'react';
import { DARK } from '../constants/constants';

interface ThemeContextProps {
    theme: string;
    setTheme: (value: string) => void; // define setTheme to take a string
}

export const initialThemeState: ThemeContextProps = {
    theme: DARK,
    setTheme: () => null
};

const ThemeContext = React.createContext(initialThemeState);
export default ThemeContext;
