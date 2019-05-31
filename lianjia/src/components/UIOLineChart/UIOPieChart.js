import React, {useEffect, useState, useRef, useCallback} from 'react';
import echarts from 'echarts';

export default function UIOPieChart (props){
    let {option: {width = '100%', height = '100%', title, tooltip, legend = {}, series, resizeDelay = 16.67}} = props;

    const chartWrapperRef = useRef();
    const _chartInstanceRef = useRef();
    const echartsRef = useRef();

    const makeSeries = (series, props) => {
        let {option: {formatter = '',}} = props;
        return series.map(series => {
            series['radius'] = ['70%', '100%'];
            series['hoverAnimation'] = false;
            series['itemStyle'] = {
                normal: {
                    label: {
                        show: false
                    }
                }
            };
            series.data.forEach((data, i) => {
                data['itemStyle'] = {
                    normal: {
                        label: i === 0 && {
                            show: true,
                            position: 'center',
                            formatter,
                            textStyle: {
                                baseline: 'bottom'
                            }
                        },
                        labelLine: {
                            show: false
                        }
                    },
                };
            });
            return series;
        });
    };

    let [state] = useState({
        width,
        height,
        title,
        tooltip,
        legend,
        series: makeSeries(series, props),
        resizeDelay,
    });

    echartsRef.current = echarts;

    let generateOption = useCallback(({title, legend, tooltip}) => {
        return {
            title,
            tooltip,
            legend: {
                orient: 'vertical',
                x: 'left',
                data: legend.data
            },
            calculable: true,
            series: state.series
        };
    }, [state.series]);

    useEffect(() => {
        function renderChart (){
            _chartInstanceRef.current = echartsRef.current.init(chartWrapperRef.current);
            _chartInstanceRef.current.setOptionInIdle = (option) => requestIdleCallback(() => {
                _chartInstanceRef.current.setOption(generateOption(option));
            });
            _chartInstanceRef.current.setOptionInIdle(state);
        }
        renderChart();
    }, [generateOption, state]);

    useEffect(() => {
        const updateChart = (data) => {
            _chartInstanceRef.current.setOptionInIdle(data);
        };

        let {option: {width = '100%', height = '100%', title, tooltip, legend = {}, series, resizeDelay = 16.67}} = props;
        updateChart({
            width,
            height,
            title,
            tooltip,
            legend,
            series: makeSeries(series, props),
            resizeDelay,
        });
    }, [props]);

    let resizeChart = () => {
        window.requestIdleCallback(_chartInstanceRef.current.resize);
    };

    useEffect(() => {
        window.addEventListener('resize', () => resizeChart());
        return () => {
            window.removeEventListener('resize', () => resizeChart());
        };
    }, []);

    return (
        <div
            style={{width: state.width, height: state.height}}
            ref={wrapper => chartWrapperRef.current = wrapper}
        >
            Sorry, your browser does not support canvas, so please replace it with modern browsers that support HTML5 standards.
        </div>
    );
}


