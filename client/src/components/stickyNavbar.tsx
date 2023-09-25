import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './navigation';
import { navBar } from '../constants/animations';
import { useVisibilityOnScroll } from '../hooks/useVisibilityScroll';

export const StickyNavbar = () => {
    const [currentLink, setCurrentLink] = useState('');
    const isVisible = useVisibilityOnScroll(100);

    return (
        <motion.div animate={isVisible ? navBar.onscreen : navBar.offscreen} id="stickyCard" className="stickyCard">
            <div className={'navbarCard'}>
                <Navbar currentLink={currentLink} setCurrentLink={setCurrentLink} />
            </div>
        </motion.div>
    );
};
