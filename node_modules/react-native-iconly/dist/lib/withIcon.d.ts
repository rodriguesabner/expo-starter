import React from 'react';
import { SvgProps } from 'react-native-svg';
export interface Props extends SvgProps {
    label?: string;
    filled?: boolean;
    primaryColor?: string;
    secondaryColor?: string;
    size?: number | 'small' | 'medium' | 'large' | 'xlarge';
    set?: 'bold' | 'bulk' | 'light' | 'broken' | 'two-tone' | 'curved';
    stroke?: 'light' | 'regular' | 'bold';
}
declare function withIcon(Component: React.ElementType): React.MemoExoticComponent<(props: Props) => JSX.Element>;
export default withIcon;
