import { Theme } from './context';
export declare const isBrowser: boolean;
export declare const getSize: (size?: number | 'small' | 'medium' | 'large' | 'xlarge') => string;
export declare const getStroke: (stroke?: 'light' | 'regular' | 'bold') => string;
export declare const getOpacity: (primaryColor: string | undefined, secondaryColor: string | undefined) => "0.4" | "1";
export declare const getThemeProp: (prop: 'primaryColor' | 'secondaryColor' | 'size' | 'set' | 'stroke', theme: Theme) => string | number | undefined;
