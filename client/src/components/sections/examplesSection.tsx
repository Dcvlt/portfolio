import { CONTENT, EXAMPLES } from '../../constants/constants';
import { KeyboardContainer } from '../keyboard/KeyboardContainer';
import Overlay from '../overlay';

export const ExamplesSection = () => {
    return (
        <div className={`${EXAMPLES} ${CONTENT}`}>
            <Overlay>
                <KeyboardContainer />
            </Overlay>
        </div>
    );
};
