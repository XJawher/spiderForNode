/* eslint-disable no-unused-vars */
import React, {useEffect, useState, useRef} from 'react';
// import {connect} from 'react-redux';
import echarts from 'echarts';
// import moment from 'moment';

export default function UIOLineChart (props){
    let {title, tooltip, legend, grid, toolbox, xAxis, yAxis, series, backgroundColor, dataZoom} = props.option;
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
    // const [sizeMonitor] = useState(0);
    echartsRef.current = echarts;

    useEffect(() => {
        function renderChart (){
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
        let timer = null;
        timer && clearTimeout(timer);
        // should do it after all animations that will affect the width calculation are done
        timer = setTimeout(requestIdleCallback(() => {
            _chartInstanceRef.current.resize();
        }), 16.67);
    };

    function throttle (func, wait){
        var context, args;
        var previous = 0;

        return function (){
            var now = +new Date();
            context = this;
            args = arguments;
            if (now - previous > wait) {
                func.apply(context, args);
                previous = now;
            }
        };
    }

    function debounce (func, wait){
        var timeout;

        return function (){
            var context = this;
            var args = arguments;

            clearTimeout(timeout);
            timeout = setTimeout(function (){
                func.apply(context, args);
            }, wait);
        };
    }

    // window.addEventListener('resize', debounce(() => resizeChart(), 16.67));
    window.addEventListener('resize', () => resizeChart()); // 60

    let generateOption = (data) => data.option;

    return (
        <div
            style={{width: state.width, height: state.height}}
            ref={wrapper => chartWrapperRef.current = wrapper}
        >
            Sorry, your browser does not support canvas, so please replace it with modern browsers that support HTML5 standards.
        </div>
    );
}


