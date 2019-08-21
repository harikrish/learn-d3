import React from 'react';
import './App.css';

import BarChart from './components/barchart';
import BarChartPart2 from './components/barchartPart2';
import Circle from './components/circle';
import ScatterPlot from './components/scatterPlot';

function App() {
  return (
    <div className="App">
      <header>
        <a
          className="App-link"
          href="https://github.com/d3/d3/wiki/Tutorials"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn D3
        </a>
      </header>
      <BarChart/>
      <BarChartPart2/>
      <Circle/>
      <ScatterPlot/>
    </div>
  );
}

export default App;
