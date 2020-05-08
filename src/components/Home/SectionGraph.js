import React, { useState, useRef, useEffect } from 'react';
import { select, scaleLinear, axisBottom, axisRight, scaleBand } from 'd3';
import ResizeObserver from 'resize-observer-polyfill';
import styled from 'styled-components';

const useResizeObserver = (ref) => {
    const [dimensions, setDimensions] = useState(null);
    useEffect(() => {
        const observeTarget = ref.current;
        const resizeObserver = new ResizeObserver((entries) => {
            entries.forEach((entry) => {
                setDimensions(entry.contentRect);
            });
            // set resized dimensions here
        });
        resizeObserver.observe(observeTarget);
        return () => {
            resizeObserver.unobserve(observeTarget);
        };
    }, [ref]);
    return dimensions;
};

function SectionGraph({ data }) {
    // console.log(data);

    const svgRef = useRef();
    const wrapperRef = useRef();
    const dimensions = useResizeObserver(wrapperRef);

    let Data = [];
    for (let i = 0; i < data.length; i++) {
        Data.push({ type: data[i].type, price: data[i].price });
    }
    // console.log(Data);

    // 내림차순 정렬
    // Data.sort((a, b) => {
    //     return a.price > b.price ? -1 : a.price < b.price ? 1 : 0;
    // });
    // console.log(typeof Data);

    useEffect(() => {
        const svg = select(svgRef.current);
        // console.log(dimensions);
        if (!dimensions) return;

        const colorScale = scaleLinear()
            .domain([
                0,
                100000,
                200000,
                300000,
                400000,
                500000,
                600000,
                700000,
                800000,
                900000,
                1000000,
            ])
            .range([
                '#dfe6e9',
                '#b2bec3',
                '#ff7675',
                '#fab1a0',
                '#fab1a0',
                '#ffeaa7',
                '#55efc4',
                '#81ecec',
                '#74b9ff',
                '#a29bfe',
                '#636e72',
            ]);

        const xScale = scaleBand()
            .domain(Data.map((value, index) => index))
            .range([0, dimensions.width - 60])
            .padding(0.5);

        const yScale = scaleLinear()
            .domain([0, 1000000])
            .range([dimensions.height, 0]);

        const xAxis = axisBottom(xScale).ticks(Data.length);

        svg.select('.x-axis')
            .style('transform', `translateY(${dimensions.height}px)`)
            .call(xAxis);

        const yAxis = axisRight(yScale);
        svg.select('.y-axis')
            .style('transform', `translateX(${dimensions.width - 50}px)`)
            .call(yAxis);

        svg.selectAll('.bar')
            .data(Data.map((value) => value))
            .join('rect')
            .attr('class', 'bar')
            .style('transform', 'scale(1, -1)')
            .attr('x', (value, index) => xScale(index))
            .attr('y', -dimensions.height)
            .attr('width', xScale.bandwidth())
            .on('mouseenter', (value, index) => {
                svg.selectAll('.tooltip')
                    .data([value.price])
                    .join((enter) =>
                        enter.append('text').attr('y', yScale(value) - 5)
                    )
                    .attr('class', 'tooltip')
                    .text(value.price)
                    .attr('x', xScale(index) + xScale.bandwidth() / 2)
                    .attr('text-anchor', 'middle')
                    .transition()
                    .attr('y', yScale(value) - 5)
                    .attr('opacity', 1);
            })
            .on('mouseleave', () => svg.select('.tooltip').remove())
            .transition()
            .duration(700)
            .attr('fill', (value) => colorScale(value.price))
            .attr('height', (value) => dimensions.height - yScale(value.price));

        // svg.selectAll('.bar')
        // 	.data(Data.map((value) => value.type))
        // 	.join('rect')
        // 	.attr('class', 'bar')
        // 	.style('transform', 'scale(1, -1)')
        // 	.attr('x', (value, index) => xScale(value))
        // 	.attr('width', xScale.bandwidth());
    }, [Data, dimensions]);

    return (
        <React.Fragment>
            <GraphTitle>The trend of housing price in the community</GraphTitle>
            <br />
            <div ref={wrapperRef}>
                <svg ref={svgRef}>
                    <g className='x-axis' />
                    <g className='y-axis' />
                </svg>
            </div>
        </React.Fragment>
    );
}

export default SectionGraph;

const GraphTitle = styled.div`
    color: var(--clr-dark);
    font-size: var(--fs-body);
    text-align: center;
`;
