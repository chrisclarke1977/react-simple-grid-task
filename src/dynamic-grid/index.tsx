import * as React from 'react';
import Grid from '../grid';
import { ColProps } from '../grid/Col';

export interface DynamicGridProps {
    width?: number;
    text?: string;
}

const DynamicGrid: React.FunctionComponent<DynamicGridProps> = (props: DynamicGridProps) => {
    const [cols, setCols] = React.useState<ColProps[]>([]);

    const onAdd = () => {
        const newCols: ColProps[] = [...cols ,{ width: 4, text: "hi" }];
        console.log("add col", cols, newCols);

        setCols(newCols);
    }
    const onRemove = () => {
        const newCols: ColProps[] = cols;
        newCols.pop();
        console.log("remove col", cols, newCols);
        setCols(newCols);
    }
    const jsonCols = () => JSON.stringify(cols);

    React.useEffect(() => {
        // Watch for changes in cols array
    }, [jsonCols()]);

    return <div className="dynamic-grid">
        <h1>Dynamic Grid</h1>
        <button onClick={onAdd}>Add</button>
        <button onClick={onRemove}>remove</button>
        <Grid cols={cols} />
    </div>
}

export default DynamicGrid;