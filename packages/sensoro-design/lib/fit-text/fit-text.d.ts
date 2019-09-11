import React from 'react';
export interface IFitTextProps {
    compressor?: number;
    minFontSize?: number;
    maxFontSize?: number;
    children: React.ReactNode;
}
declare class FitText extends React.Component<IFitTextProps> {
    private updateQueued;
    private _childRef;
    private nodes;
    static defaultProps: {
        compressor: number;
        minFontSize: number;
        maxFontSize: number;
    };
    componentWillMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    updateElementStyle: (element: HTMLElement, options: any, width: number) => void;
    handleBodyResize: () => void;
    _renderChildren: () => React.FunctionComponentElement<{
        ref: (c: any) => void;
    }>[];
    render(): React.FunctionComponentElement<{
        ref: (c: any) => void;
    }>;
}
export default FitText;
