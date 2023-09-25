import { FULL, LEFT, RIGHT } from '../constants/constants';

type splitSpacerProps = {
    spacerType?: string;
};
export const SplitSpacer = ({ spacerType = FULL }: splitSpacerProps) => {
    return (
        <div className="spacerContainer">
            {[FULL, LEFT].includes(spacerType) && <div className="leftSpacer" />}
            {[FULL, RIGHT].includes(spacerType) && <div className="rightSpacer" />}
        </div>
    );
};
