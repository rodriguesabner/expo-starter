import React, { createContext, useContext } from 'react';
const defaultValue = {
    primaryColor: 'currentColor',
    set: 'light',
    size: 'medium',
    stroke: 'regular',
};
export const IconlyContext = createContext(defaultValue);
IconlyContext.displayName = 'IconlyIconlyContext';
export const IconlyProvider = ({ children, primaryColor, secondaryColor, set, size, stroke }) => {
    const value = {
        primaryColor: primaryColor || 'currentColor',
        secondaryColor,
        set: set || 'light',
        size: size || 'medium',
        stroke: stroke || 'regular',
    };
    return <IconlyContext.Provider value={value}>{children}</IconlyContext.Provider>;
};
export const useIconlyTheme = () => {
    const context = useContext(IconlyContext);
    if (context === undefined) {
        throw new Error('UseIconlyTheme must be Used within a IconlyProvider');
    }
    return context;
};
