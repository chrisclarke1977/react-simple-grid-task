import * as React from 'react';
import Col, { ColProps } from './Col';

interface GridProps {
    cols: ColProps[],
}

/**
 * cols total widths === 12
 * cols can contain text
 */

const MAX_WIDTH: number = 12;

const Grid: React.FunctionComponent<GridProps> = (props: GridProps) => {
    const { cols } = props;
    // if no cols grid is invalid
    if (typeof cols === undefined || cols.length === 0) {
        return <div>grid has no cols</div>
    }

    // check sum of widths === 12 or return empty grid
    const gridWidth = cols.reduce((acc, col) => acc + (col.width || 0), 0);
    
    if(gridWidth !== MAX_WIDTH) {
        return <div>grid width not valid</div>
    }

    return <div className="grid">{cols.map(col => <Col {...col} />)}</div>;
}

export default Grid;