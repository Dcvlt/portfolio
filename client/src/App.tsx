import PiLine from './components/piLine';
import { Geoform } from './components/geoForm';
import Section from './components/sections/section';
import ThemeProvider from './providers/themeProvider';
import { ThemeSetter } from './components/themeSetter';
import { StickyNavbar } from './components/stickyNavbar';

function App() {
    return (
        <ThemeProvider>
            <StickyNavbar />
            <div id="mainContainer">
                <div className="mainScreenContainer">
                    <ThemeSetter />
                </div>
                <div className="geoFormCard">
                    <Geoform />
                </div>
                <div className="sectionCard">
                    <Section />
                </div>
                <div className="piCard">
                    <PiLine />
                </div>
                <div className="finalScreenContainer" />
            </div>
        </ThemeProvider>
    );
}

export default App;
