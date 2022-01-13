import React from 'react';
export interface Theme {
    primaryColor?: string;
    secondaryColor?: string;
    size?: number | 'small' | 'medium' | 'large' | 'xlarge';
    set?: 'bold' | 'bulk' | 'light' | 'broken' | 'two-tone' | 'curved';
    stroke?: 'light' | 'regular' | 'bold';
}
interface Props extends Theme {
    children: React.ReactNode;
}
export declare const IconlyContext: React.Context<Theme>;
export declare const IconlyProvider: ({ children, primaryColor, secondaryColor, set, size, stroke }: Props) => JSX.Element;
export declare const useIconlyTheme: () => Theme;
export {};
