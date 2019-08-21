import React, { useEffect } from 'react';
import * as d3 from 'd3';

const draw = () => {
    const svg = d3.select(".circle");

    const circle = svg.selectAll("circle")
        .data([32, 57, 112, 293]);

    const circleEnter = circle.enter().append("circle");
    circleEnter.attr("cy", 60);
    circleEnter.attr("cx", function(d, i) { return i * 100 + 30; });
    circleEnter.attr("r", function(d) { return Math.sqrt(d); });
};

const Circle = () => {
    useEffect(() => {
        d3.select('.circle > *').remove();
        draw();
    });

    return (
        <div>
            Circle
            <div>
                <svg className="circle" width="720" height="120">
                </svg>
            </div>
        </div>
    );
}

export default Circle;