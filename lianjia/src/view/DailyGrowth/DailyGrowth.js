import React, { Component } from 'react';
import http from '../../http/http';
import LineChart from '../../components/LineChart/LineChart';

export default class DailyGrowth extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {
                code: 1,
                data: []
            },
            series: [],
            time: [],
            legend: [],
        };
    }

    getCityByConditions() {
        http.getCityByCondition();
    }

    componentWillMount() {
        this.cityRankings();
    }

    async cityRankings() {
        let { data } = await http.cityRankings();
        let series = [];
        let legend = [];
        data.forEach(element => {
            series.push({ name: element.cityCH, type: 'line', data: element.total });
            legend.push(element.cityCH);
        });
        // console.log([... new Set(data[0].time.map(item => item.split('T')[0]))]);
        let time = data[0].time.map(item => item.split('T')[0]);
        console.log(time);
        this.setState({ series, time: time, legend: legend });
    }

    getTest() {
        http.testGet();
    }

    render() {
        let option = {
            title: {
                text: '折线图堆叠'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: this.state.legend
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: this.state.time
            },
            yAxis: {
                type: 'value'
            },
            series: this.state.series
        };


        return (
            <div className="xc-body-wrapper">
                <div>
                    <LineChart option={option} />
                </div>
            </div>
        );
    }
}