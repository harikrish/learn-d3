import React from 'react';
import logo from './logo.svg';
import './App.css';

import BarChart from './components/barchart';

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
    </div>
  );
}

export default App;
