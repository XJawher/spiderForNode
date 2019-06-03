import React, {Component} from 'react';
// import {connect} from 'react-redux';
import echarts from 'echarts';
// import moment from 'moment';

class LineChart extends Component {
    constructor (props){
        super(props);
        let {title, tooltip, legend, grid, toolbox, xAxis, yAxis, series, backgroundColor, dataZoom} = this.props.option;
        let {width = '100%', height = 500} = this.props;
        this.state = {
            height, width,
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
        };
    }

    componentDidMount (){
        this.renderChart();
    }

    renderChart (){
        this._chartInstance = echarts.init(this.chartWrapper);
        this._chartInstance.setOption(this.generateOption(this.state));
    }

    componentWillReceiveProps (nextProps){
        this._chartInstance.setOption(this.generateOption(nextProps));
    }

    generateOption (data){
        return data.option;
    }

    render (){
        return (
            <div style={{width: this.state.width, height: this.state.height}} ref={chartWrapper => this.chartWrapper = chartWrapper}></div>
        );
    }
}



export default LineChart;