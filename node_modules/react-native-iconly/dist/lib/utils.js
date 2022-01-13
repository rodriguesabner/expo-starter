import { sizes, strokes } from './constants';
export const isBrowser = typeof window !== 'undefined';
export const getSize = (size = 'medium') => {
    if (typeof size === 'number') {
        return `${size}px`;
    }
    return sizes[size];
};
export const getStroke = (stroke = 'regular') => strokes[stroke];
export const getOpacity = (primaryColor, secondaryColor) => {
    if (!secondaryColor) {
        return '0.4';
    }
    return primaryColor === secondaryColor ? '0.4' : '1';
};
export const getThemeProp = (prop, theme) => theme[prop];
