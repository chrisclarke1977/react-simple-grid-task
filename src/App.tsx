import React from 'react';
import './App.css';
import Grid from './grid';

function App() {
  return (
    <div className="App">
      <Grid cols={[{ width: 4, text: "hi" }, { width: 8, text: "there" }]} />
    </div>
  );
}

export default App;
