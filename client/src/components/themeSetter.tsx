//ThemeSetter.js
import { useContext, useEffect, useState } from 'react';
import ThemeContext from '../contexts/themeContext';
import { DARK, LIGHT } from '../constants/constants';
import { ReactComponent as MoonIcon } from '../assets/svg/moon.svg';
import { ReactComponent as SunIcon } from '../assets/svg/sun.svg';

export const ThemeSetter = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    const [isEnabled, setIsEnabled] = useState(theme === DARK);

    useEffect(() => {
        setTheme(isEnabled ? DARK : LIGHT);
    }, [isEnabled]);

    const toggleState = () => {
        setIsEnabled(prevState => !prevState);
    };

    return (
        <label className="toggle-wrapper" htmlFor="toggle">
            <div className={`toggle ${isEnabled ? 'enabled' : 'disabled'}`}>
                <div className="icons">{isEnabled ? <SunIcon /> : <MoonIcon />}</div>
                <input id="toggle" name="toggle" type="checkbox" checked={isEnabled} onChange={toggleState} />
            </div>
        </label>
    );
};
