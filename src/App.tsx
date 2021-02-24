import React from 'react';
import './App.css';
import Grid from './grid';
import { ColProps } from './grid/Col';

const testGridInvalid: ColProps[] = [{ width: 1, text: "hi" }, { width: 8, text: "there" }];
const testGrid: ColProps[] = [{ width: 4, text: "hi" }, { width: 8, text: "there" }];
const testGridNoCols: ColProps[] = [];

function App() {
  return (
    <div className="App">
      <Grid cols={testGridInvalid} />
      <Grid cols={testGrid} />
      <Grid cols={testGridNoCols} />
    </div>
  );
}

export default App;
