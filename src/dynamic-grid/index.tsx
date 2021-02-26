import * as React from 'react';
import { renderToString } from 'react-dom/server';
import Grid from '../grid';
import { ColProps } from '../grid/Col';

export interface DynamicGridProps {

}

const DynamicGrid: React.FunctionComponent<DynamicGridProps> = (props: DynamicGridProps) => {
    const { useState, useEffect } = React;
    const [cols, setCols] = useState<ColProps[]>([]);
    const [exJson, setExJson] = useState({});
    // const [exHTML, setExHTML] = useState('<div></div>');
    
    const onAdd = () => {
        const newCols: ColProps[] = [...cols, { width: 4, text: "hi" }];
        newCols.map(i => i.width = Math.round(12 / (newCols.length))); // Adjust widths of cols
        setCols(newCols);
    }
    const onRemove = () => {
        const newCols: ColProps[] = cols;
        newCols.pop();
        newCols.map(i => i.width = Math.round(12 / (newCols.length))); // Adjust widths of cols
        setCols(newCols);
    }
    // const exportHTML = () => {
    //     setExHTML('<div></div>');
    // }
    const exportJSON = () => {
        const jsonCols = () => JSON.stringify(cols);
        setExJson({ grid: jsonCols() });
    }
    
    useEffect(() => {
        // Watch for changes in cols array length
    }, [cols.length]);

    return <div className="dynamic-grid">
        <h1>Dynamic Grid</h1>
        <button onClick={onAdd}>Add</button>
        <button onClick={onRemove}>remove</button>
        {/* <button onClick={exportHTML}>export html</button> */}
        <button onClick={exportJSON}>export</button>
        <Grid cols={cols} />
        <div>
            <h2>export html</h2>
            <pre>{renderToString(<Grid cols={cols} />)}</pre>
            <h2>export json</h2>
            <pre>{JSON.stringify(exJson)}</pre>
        </div>
    </div>
}

export default DynamicGrid;