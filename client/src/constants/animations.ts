export const presentationTitle = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            type: 'spring',
            bounce: 0.4,
            duration: 1
        }
    }
};

export const presentationContent = {
    hidden: {
        opacity: 0.5
    },
    visible: {
        x: '43vw',
        transition: {
            type: 'spring',
            bounce: 0.4,
            duration: 0.8
        }
    }
};

export const navBar = {
    offscreen: {
        y: -500
    },
    onscreen: {
        y: 0,
        transition: {
            type: 'spring',
            bounce: 0.4,
            duration: 0.8
        }
    }
};
