import * as React from 'react';

export interface ColProps {
    width?: number;
    text?: string;
}

const Col: React.FunctionComponent<ColProps> = (props: ColProps) => {
    const { text, width } = props;
    const widthClass = `width-${width}`;
    const colClass = `column ${widthClass}`
    return <div className={colClass}>{text ? text : ''}</div>
}

export default Col;