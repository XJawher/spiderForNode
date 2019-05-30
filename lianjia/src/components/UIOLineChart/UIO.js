import React, { useEffect, useState, useRef } from 'react';
// import {connect} from 'react-redux';
import echarts from 'echarts';
// import moment from 'moment';

export default function UIOLineChart(props) {
    let { title, tooltip, legend, grid, toolbox, xAxis, yAxis, series, backgroundColor, dataZoom } = props.option;
    let width = '92%';
    let height = '90%';
    let [state] = useState({
        height, width,
        resizeDelay: 1,
        option: {
            title,
            tooltip,
            legend,
            grid,
            toolbox,
            xAxis,
            yAxis,
            backgroundColor,
            dataZoom,
            series
        }
    });

    const chartWrapperRef = useRef();
    const _chartInstanceRef = useRef();
    // useCallback()
    const echartsRef = useRef();
    echartsRef.current = echarts;

    useEffect(() => {
        function renderChart() {
            // _chartInstanceRef.current = echartsRef.current.init(chartWrapperRef.current);
            // _chartInstanceRef.current.setOptionInIdle = (option) => requestIdleCallback(() => {
            //     _chartInstanceRef.current.setOption(generateOption(option));
            // });
            // _chartInstanceRef.current.setOptionInIdle(state);
            _chartInstanceRef.current = echartsRef.current.init(chartWrapperRef.current);
            requestIdleCallback(() => {
                _chartInstanceRef.current.setOption(generateOption(state));
            });
        }
        renderChart();
    }, [state]);

    useEffect(() => {
        requestIdleCallback(() => {
            _chartInstanceRef.current.setOption(generateOption(props));
        });
    }, [props]);

    let resizeChart = () => {
        console.log(window.innerHeight);
        console.log(window.innerWidth);
        _chartInstanceRef.current.resize({ width: 'auto', height: 'auto' });
    };

    window.addEventListener('resize', () => resizeChart());

    let generateOption = (data) => data.option;

    return (
        <div
            style={{ width: state.width, height: state.height }}
            ref={wrapper => chartWrapperRef.current = wrapper}
        >
            Sorry, your browser does not support canvas, so please replace it with modern browsers that support HTML5 standards.
        </div>
    );
}


