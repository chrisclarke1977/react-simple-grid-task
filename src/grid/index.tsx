import * as React from 'react';

interface ColProps {
    width: number;
    text?: string;
}

interface GridProps {
    cols: ColProps[],
}

/**
 * cols total widths === 12
 * cols can contain text
 */

const Col: React.FunctionComponent<ColProps> = (props: ColProps) => {
    const { text, width } = props;
    const widthClass = `width-${width}`;
    return <div className={widthClass}>{text ? text : ''}</div>
}

const Grid: React.FunctionComponent<GridProps> = (props: GridProps) => {
    const { cols } = props;
    // if no cols grid is invalid
    if (typeof cols === undefined) {
        return <div>grid has no cols</div>
    }

    // check sum of widths === 12 or return empty grid
    const gridWidth = cols.reduce((acc, col) => acc + (col.width), 0);
    
    if(gridWidth !== 12) {
        return <div>grid width not valid</div>
    }

    return <div>{cols.map(col => <Col {...col} />)}</div>;
}

export default Grid;