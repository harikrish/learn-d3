import React, { useEffect } from 'react';
import * as d3 from 'd3';

const data = [4, 8, 15, 16, 23, 42];

const width = 420,
    barHeight = 20;

const x = d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range([0, width]);

const draw = (props) => {
    const chart = d3.select(".bar-chart-part2")
        .attr("width", width)
        .attr("height", barHeight * data.length);

    const bar = chart.selectAll("g")
        .data(data)
        .enter().append("g")
        .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });

    bar.append("rect")
        .attr("width", x)
        .attr("height", barHeight - 1);

    bar.append("text")
        .attr("x", function(d) { return x(d) - 3; })
        .attr("y", barHeight / 2)
        .attr("dy", ".35em")
        .text(function(d) { return d; });
}

const BarChartPart2 = (props) => {
    useEffect(() => {
        d3.select('.bar-chart-part2 > *').remove();
        draw(props);
    });

    return (
        <div>
            Bar Chart Part 2
            <div>
                <svg className="bar-chart-part2"></svg>
            </div>
        </div>
    );
    
};

export default BarChartPart2;