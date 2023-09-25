export const capitalizeFirstLetter = (string: string) => {
    return string[0].toUpperCase() + string.slice(1);
};

export const getScrollPositionAsPercentage = () => {
    const scrollPosition = window.scrollY;
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const percentageScrolled = (scrollPosition / totalHeight) * 100;
    return percentageScrolled as number;
};

export const convertVHToPixels = (vh: number) => {
    return (window.innerHeight / 100) * vh;
};

export const getOffset = (vh: number = 100) => {
    return convertVHToPixels(vh);
};

export const insertMiddleToArray = <T>(array: T[], item: T): T[] => {
    let element = Math.ceil(array.length / 2);
    if (array?.length) {
        return array.slice(0, element).concat(item, array.slice(element));
    } else return [item];
};
