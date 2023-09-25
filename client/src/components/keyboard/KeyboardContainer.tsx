import Keyboard from './Keyboard';
import '../../assets/css/keyboardContainer.scss';

export const KeyboardContainer = () => (
    <div id="KeyboardContainer">
        <div className="mainBorder">
            <div className="leftStripes" />
            <div className="rightStripes" />
        </div>
        <div className="centerContentWrapper">
            <div className="centerContent">
                <div className="centerContent-element">
                    <div className="centerContent-element-title">A-Corne</div>
                </div>
                <div className="centerContent-header">
                    <div className="centerContent-header-element">Specs</div>
                    <div className="centerContent-header-element">Custom</div>
                    <div className="centerContent-header-element">Shop</div>
                    <div className="centerContent-header-element">Contact</div>
                </div>
                <div className="centerContent-element">
                    <Keyboard />
                </div>
                <div className="centerContent-element">
                    <div className="centerContent-element-text">
                        <p>
                            The A-corne keyboard is a split keyboard with 3x6 column staggered keys and 3 thumb keys,
                            based on crkbd/corne.
                        </p>
                        <p>
                            Additionnal side keys used to control a separate macropad is the main difference with
                            crkbd/corne.
                        </p>
                    </div>
                </div>
                <div className="centerContent-element">
                    <div className="centerContent-element-text">
                        <p>
                            The A-corne keyboard is a split keyboard with 3x6 column staggered keys and 3 thumb keys,
                            based on crkbd/corne.
                        </p>
                        <p>
                            Additionnal side keys used to control a separate macropad is the main difference with
                            crkbd/corne.
                        </p>
                    </div>
                </div>
                <div className="centerContent-element">
                    <div className="centerContent-element-text">
                        <p>
                            The A-corne keyboard is a split keyboard with 3x6 column staggered keys and 3 thumb keys,
                            based on crkbd/corne.
                        </p>
                        <p>
                            Additionnal side keys used to control a separate macropad is the main difference with
                            crkbd/corne.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
