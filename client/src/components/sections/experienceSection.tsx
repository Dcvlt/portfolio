import { CONTENT, EXPERIENCE, LANGUAGES, TEXT, TITLE } from '../../constants/constants';
import { motion } from 'framer-motion';

import { ReactComponent as ReactIcon } from '../../assets/svg/react.svg';
import { ReactComponent as TypescriptIcon } from '../../assets/svg/typescript.svg';
import { ReactComponent as NodeIcon } from '../../assets/svg/node.svg';
import { ReactComponent as GraphQLIcon } from '../../assets/svg/graphQL.svg';

export const ExperienceSection = () => {
    return (
        <div className={`${EXPERIENCE} ${CONTENT}`}>
            <div className={`${EXPERIENCE} ${TITLE}`}>The standard Lorem Ipsum passage, used since the 1500s</div>
            <motion.div className={`${LANGUAGES} ${EXPERIENCE}`}>
                <motion.div className="svgThemed">
                    <TypescriptIcon />
                </motion.div>
                <motion.div className="svgThemed">
                    <ReactIcon />
                </motion.div>
                <motion.div className="svgThemed">
                    <NodeIcon />
                </motion.div>
                <motion.div className="svgThemed">
                    <GraphQLIcon />
                </motion.div>
            </motion.div>
            <div className={`${EXPERIENCE} ${TEXT}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
            </div>
        </div>
    );
};
