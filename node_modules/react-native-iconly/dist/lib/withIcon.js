var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { memo, useContext } from 'react';
import Svg from 'react-native-svg';
import { getSize, getThemeProp, getStroke, getOpacity } from './utils';
import { IconlyContext } from './context';
function withIcon(Component) {
    const IconWrapper = (_a) => {
        var { size, label, primaryColor, secondaryColor, filled, set, stroke } = _a, restProps = __rest(_a, ["size", "label", "primaryColor", "secondaryColor", "filled", "set", "stroke"]);
        const theme = useContext(IconlyContext);
        const iconSize = getSize(size) || getSize(getThemeProp('size', theme)) || '24px';
        const iconPrimaryColor = primaryColor || getThemeProp('primaryColor', theme) || 'currentColor';
        const iconSecondaryColor = secondaryColor || getThemeProp('secondaryColor', theme) || iconPrimaryColor || 'currentColor';
        return (<Svg width={iconSize} height={iconSize} viewBox="0 0 24 24" aria-label={label || undefined} {...restProps}>
        <Component color={iconPrimaryColor} opacity={getOpacity(primaryColor, secondaryColor)} secondaryColor={iconSecondaryColor} set={filled ? 'bold' : set || getThemeProp('set', theme) || 'light'} strokeWidth={stroke ? getStroke(stroke) : getStroke(getThemeProp('stroke', theme)) || '1.5px'}/>
      </Svg>);
    };
    const MemoIcon = memo(IconWrapper);
    return MemoIcon;
}
export default withIcon;
