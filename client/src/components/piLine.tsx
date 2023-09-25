import React, { useEffect, useState } from 'react';
import { PI } from '../constants/constants';
import { motion } from 'framer-motion';
import { convertVHToPixels } from '../helpers/helpers';

const PiLine: React.FC = () => {
    const [digits, setDigits] = useState<string[]>([]);

    useEffect(() => {
        const digitsArray = Array.from(PI);
        setDigits(digitsArray);
    }, []);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const goToFirst = () => {
        window.scrollTo({
            top: convertVHToPixels(110),
            behavior: 'smooth'
        });
    };

    return (
        <div className="piColumn">
            <motion.div
                whileHover={{ scale: [null, 1.5, 1.4] }}
                transition={{ duration: 0.3 }}
                className="piMain"
                onClick={goToFirst}
            >
                π
            </motion.div>
            <div className="piWrapper">
                {digits.map((digit, index) => (
                    <React.Fragment key={`pi-${index}`}>
                        <div className="piContainer">{isNaN(Number(digit)) ? '.' : digit}</div>
                        {index !== 0 && <br />}
                    </React.Fragment>
                ))}
            </div>
            <motion.div
                whileHover={{ scale: [null, 1.5, 1.4] }}
                transition={{ duration: 0.3 }}
                className="piEnd"
                onClick={goToTop}
            >
                π
            </motion.div>
        </div>
    );
};

export default PiLine;
