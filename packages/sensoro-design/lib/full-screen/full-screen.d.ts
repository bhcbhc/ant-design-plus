import React, { RefObject } from 'react';
export interface IFullScreenProps {
    prefixCls?: string;
    className?: string;
    style?: React.CSSProperties;
    isBody?: boolean;
    targetRef?: RefObject<Element>;
    onChange: (isFullScreen: boolean) => void;
}
declare const FullScreen: React.FC<IFullScreenProps>;
export default FullScreen;
