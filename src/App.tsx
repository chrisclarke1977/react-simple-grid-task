import React from 'react';
import './App.css';
import Grid from './grid';
import { ColProps } from './grid/Col';

const testGridInvalid = [{ width: 1, text: "hi" }, { width: 8, text: "there" }];
const testGrid = [{ width: 4, text: "hi" }, { width: 8, text: "there" }];
// const testGridNoCols: ColProps = [];

function App() {
  return (
    <div className="App">
      <Grid cols={testGridInvalid} />
      <Grid cols={testGrid} />
    </div>
  );
}

export default App;
