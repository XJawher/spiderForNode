// MonthToMonth
import React, { Component } from 'react';
import LineChart from '../../components/LineChart/LineChart';

export default class MonthToMonth extends Component {

    constructor(props) {
        super(props);
        this.state = {
            resetDataSecond: [],
            resetDataFirst: [],
        };
    }

    /**
     * 环比的数据从 3-29 号开始,然后 4-29 5-16 一直这么排列
     * 环比的计算方法:
     * @param {*} nextProps
     * 一、同比和环比的区别
        「同比」
        与历史「同时期］比较，例如2011年3月份与2010年3月份相比，叫「同比」。

        「环比」
        与「上一个」统计周期比较，例如2011年4月份与2011年3月份相比较，称为「环比」。

        反映的都是「变化速度」，但由于采用「基期」的不同，其反映的内涵是完全不同的；
        1、一般来说，环比可以与环比相比较，而不能拿「同比」与「环比」相比较；
        2、而对于同一个地方，考虑时间纵向上发展趋势的反映，则往往要把「同比」与「环比」放在一起进行对照。
        环比分为日环比、周环比、月环比和年环比。
        本期环比增长（下降）率(%) = (本期价格/上期价格 — 1 )× 100%
        说明：（1）如果计算值为正值（+），则称增长率；如果计算值为负值（-），则称下降率。
        （2）如果本期指本日、本周、本月和本年，则上期相应指上日、上周、上月和上年。
     */
    componentWillReceiveProps(nextProps) {
        let resetDataFirst = [];
        let resetDataSecond = [];
        let first = '03-29';
        let second = '04-29';
        nextProps.city.forEach(element => {
            element.time.forEach((itemOfTime, indexTime) => {
                if (/03-29/.test(itemOfTime)) {
                    resetDataFirst.push({ time: first, cityEN: element.cityEN, cityCH: element.cityCH, total: Number(element.total[indexTime]) });
                } else if (/04-29/.test(itemOfTime)) {
                    let sortNumber = (a, b) => a.time < b.time ? -1 : 1;
                    let sourceData = element.modify;
                    if (element.cityCH === '上海') {
                        sourceData.sort(sortNumber);
                    }
                    resetDataSecond.push({ time: second, cityEN: element.cityEN, cityCH: element.cityCH, total: Number(sourceData[indexTime].total) });
                }
            });
        });
        let sortNumber = () => (a, b) => b.total - a.total;
        this.setState({ resetDataSecond: resetDataSecond.sort(sortNumber()), resetDataFirst: resetDataFirst.sort(sortNumber()) });
    }

    showRacing(params) {
        let { resetDataSecond, resetDataFirst } = this.state;
        let race = (resetDataSecond[params.dataIndex].total / resetDataFirst[params.dataIndex].total) - 1;
        race = race * 100;
        return `${params.name}${params.data}\n 环比:${race.toFixed(2)}%`;
    }

    render() {
        let cityCH = ["成都", '重庆', '武汉', '上海', '郑州', '广州', '天津', '深圳', '西安'];
        let firstMarkPoint = [];
        if (this.state.resetDataFirst.length) {
            this.state.resetDataFirst.sort((a, b) => cityCH.findIndex(n => n === a.cityCH) - cityCH.findIndex(n => n === b.cityCH)).forEach((item, index) => {
                let value = (this.state.resetDataSecond[index].total / item.total) - 1;
                firstMarkPoint.push({ name: item.cityCH, value: value });
            });
        }
        let option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    crossStyle: {
                        color: '#999'
                    }
                }
            },
            toolbox: {
                feature: {
                    dataView: { show: true, readOnly: false },
                    magicType: { show: true, type: ['line', 'bar'] },
                    restore: { show: true },
                    saveAsImage: { show: true }
                }
            },
            legend: {
                data: ['3-29', '4-29', '月环比']
            },
            xAxis: [
                {
                    type: 'category',
                    data: cityCH,
                    axisPointer: {
                        type: 'shadow'
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '总量',
                    min: 27000,
                    max: 87000,
                    // interval: 50,
                    axisLabel: {
                        formatter: '{value} 套'
                    }
                },
            ],
            series: [
                {
                    name: '3-29',
                    type: 'bar',
                    data: this.state.resetDataFirst.length ? this.state.resetDataFirst.sort((a, b) => cityCH.findIndex(n => n === a.cityCH) - cityCH.findIndex(n => n === b.cityCH)).map(item => item.total) : [],
                    label: {
                        normal: {
                            show: true, //开启显示
                            position: 'top', //在上方显示
                            textStyle: { //数值样式
                                color: 'black',
                                fontSize: 16,
                            }
                        }
                    }
                },
                {
                    name: '4-29',
                    type: 'bar',
                    data: this.state.resetDataSecond.length ? this.state.resetDataSecond.sort((a, b) => cityCH.findIndex(n => n === a.cityCH) - cityCH.findIndex(n => n === b.cityCH)).map(item => item.total) : [],
                    label: {
                        normal: {
                            show: true, //开启显示
                            position: 'top', //在上方显示
                            textStyle: { //数值样式
                                color: 'black',
                                fontSize: 16
                            },
                            formatter: this.showRacing.bind(this)
                        }
                    }
                },
            ]
        };
        return (
            <div >
                <LineChart option={option} />
            </div>
        );
    }
}