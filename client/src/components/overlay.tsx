import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import '../assets/css/overlay.scss'; // Import your css

function Overlay({ children }: any) {
    const [navOpen, setNavOpen] = useState(false);

    const handleClick = () => {
        console.log('navOpen', navOpen);
        setNavOpen(!navOpen);
    };

    useEffect(() => {
        if (navOpen) {
            console.log('hidden', document.body.style.overflow);
            document.body.style.overflow = 'hidden';
        } else document.body.style.overflow = 'visible';
    }, [navOpen]);

    return (
        <div className="overlay-container">
            <div className="overlayTrigger">
                <div className="overlayTriggerButton" onClick={handleClick}>
                    Menu
                </div>
            </div>

            <motion.nav
                className="overlayBox"
                initial={{ scaleX: 0, scaleY: 0, opacity: 0 }}
                animate={{ scaleX: navOpen ? 1 : 0, scaleY: navOpen ? 1 : 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: 'linear' }}
                onClick={handleClick}
            >
                <div className="overlayTrigger">
                    <div className="overlayBoxTriggerButton" onClick={handleClick}>
                        Menu
                    </div>
                </div>
                <div className="overlayBoxContent">{children}</div>
            </motion.nav>
        </div>
    );
}

export default Overlay;
