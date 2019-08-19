import React, { useEffect } from 'react';
import * as d3 from 'd3';

const data = [10, 20];

var x = d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range([0, 420]);

const draw = (props) => {
    d3.select(".bar-chart")
    .selectAll("div")
        .data(data)
    .enter().append("div")
        .style("width", function(d) { return x(d) + "px"; })
        .text(function(d) { return d; });
}

const BarChart = (props) => {
    useEffect(() => {
        d3.select('.bar-chart > *').remove();
        draw(props);
    });

    return (
        <div className="bar-chart">Bar Chart</div>
    );
    
};

export default BarChart;