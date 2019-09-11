import React from 'react';
import { ButtonProps } from 'antd/es/button';
export interface ISendCodeProps extends ButtonProps {
    start?: boolean;
    second?: number;
    initText?: string;
    runText?: string;
    resetText?: string;
    onEnd?: () => void;
}
interface ISendCodeState {
    buttonText: string;
    start: boolean;
    loading: boolean;
}
declare class SendCode extends React.Component<ISendCodeProps, ISendCodeState> {
    private timer;
    private lastSecond;
    constructor(props: any);
    static defaultProps: ISendCodeProps;
    readonly state: ISendCodeState;
    componentWillUnmount(): void;
    componentWillReceiveProps(nextProps: ISendCodeProps): void;
    startCountdown: () => void;
    timeout: () => void;
    render(): JSX.Element;
}
export default SendCode;
