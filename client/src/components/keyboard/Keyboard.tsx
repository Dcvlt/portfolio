import '../../assets/css/keyboard.scss';

const Keyboard = () => {
    const keyboardHalf = [
        [0, 1, 1, 2, 2, 3, 4, 9],
        [0, 1, 1, 2, 2, 3, 4, 10],
        [1, 1, 1, 2, 2, 3, 4, 5],
        [1, 1, 0, 0, 6, 7, 8]
    ];

    const renderHalf = (side: string) => {
        const half = side === 'left' ? keyboardHalf : keyboardHalf.map(row => row.reverse());

        return (
            <div className="keyboard-half">
                {half.map(row => (
                    <div className={`keyboard-row ${side}`}>
                        {row.map(val => (
                            <div className={`keyboard-row-key key${val} ${side}`} />
                        ))}
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div id="keyboard">
            <div className="keyboard-left">{renderHalf('left')}</div>
            <div className="keyboard-right">{renderHalf('right')}</div>
        </div>
    );
};

export default Keyboard;
