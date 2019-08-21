import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

import ScatterPlot from './scatterPlot';

const styles = {
    width   : 500,
    height  : 300,
    padding : 30,
  };

// The number of data points for the chart.
const numDataPoints = 50;

// A function that returns a random number from 0 to 1000
const randomNum     = () => Math.floor(Math.random() * 1000);

// A function that creates an array of 50 elements of (x, y) coordinates.
const randomDataSet = () => {
  return Array.apply(null, {length: numDataPoints}).map(() => [randomNum(), randomNum()]);
}

const Chart = () => {
    const [data, setData] = useState({data: randomDataSet()});

    const randomizeData = () => {
        setData({data: randomDataSet()});
    }

    return (
        <div>
            Scatter Plot
            <div>
                <div>
                    <ScatterPlot {...data } {...styles}/>
                </div>
                <Button variant="contained" onClick={randomizeData}>
                    Randomize Data
                </Button>
            </div>
        </div>
    );
}

export default Chart;