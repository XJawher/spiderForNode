import React, { Component } from 'react';
import http from '../../http/http';
import LineChart from '../../components/LineChart/LineChart';
import MonthToMonth from './MonthToMonth';
import { Button } from 'antd';
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
            city: [],
            legend: [],
        };
    }

    componentWillMount() {
        this.cityRankings();
    }

    async cityRankings() {
        let { data } = await http.cityRankings();
        let series = [];
        let legend = [];
        let sortNumber = (a, b) => a.time < b.time ? -1 : 1;
        data.forEach(element => {
            let sourceData = element.modify;
            if (element.cityCH === '上海') {
                sourceData.sort(sortNumber);
            }
            series.push({ name: element.cityCH, type: 'line', data: sourceData.map(item => item.total.trim()) });
            legend.push(element.cityCH);
        });
        // console.log([... new Set(data[0].time.map(item => item.split('T')[0]))]);
        let time = data[0].time.map(item => item.split('T')[0]);
        this.setState({ series, time: time, legend: legend, city: data });
    }

    yAxis(value) {
        return value;
    }

    insertXian() {
        http.insertXian();
    }

    render() {
        let option = {
            title: {
                text: '中心城市每日数据'
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
                type: 'value',
                min: '25000',
                max: '95000',
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#e5e5e5'
                    }
                },
                splitArea: { show: false }
            },
            series: this.state.series
        };


        return (
            <div className="xc-daily-growth-main">
                <div className='daily-growth'>
                    <LineChart option={option} />
                </div>

                <div className='month-to-month'>
                    环比数据:
                    <MonthToMonth city={this.state.city} />
                </div>
                <div><Button onClick={this.insertXian.bind(this)}>西安</Button></div>
            </div>
        );
    }
}