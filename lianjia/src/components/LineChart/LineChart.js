import React, { Component } from 'react';
// import {connect} from 'react-redux';
import echarts from 'echarts';
// import moment from 'moment';

class LineChart extends Component {
    constructor(props) {
        super(props);
        let { title, tooltip, legend, grid, toolbox, xAxis, yAxis, series } = this.props.option;
        this.state = {
            option: {
                title,
                tooltip,
                legend,
                grid,
                toolbox,
                xAxis,
                yAxis,
                series
            }
        };
    }

    componentDidMount() {
        this.renderChart();
    }

    renderChart() {
        this._chartInstance = echarts.init(this.chartWrapper);
        this._chartInstance.setOption(this.generateOption(this.state));
    }

    componentWillReceiveProps(nextProps) {
        this._chartInstance.setOption(this.generateOption(nextProps));
    }

    generateOption(data) {
        return data.option;
    }

    render() {
        return (
            <div style={{ width: 1300, height: 500 }} ref={chartWrapper => this.chartWrapper = chartWrapper}></div>
        );
    }
}



export default LineChart;