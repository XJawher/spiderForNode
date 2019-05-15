import React, { Component } from 'react';
import LineChart from '../../../components/LineChart/LineChart';


export default class DaysLine extends Component {
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
            community: [],
            // nameOfSeries: [
            //     '0-50万', '50-100万', '100-150万', '150-200万', '200-250万', '250-300万', '300-350万', '350-400万', '400-450万', '450-500万', '500-550万', '600-1500万',
            // ],
            // mockPrice: [[0, 50], [51, 100], [101, 150], [151, 200], [201, 250], [251, 350], [351, 400], [401, 450], [451, 500], [501, 550], [601, 1500]]
            nameOfSeries: [
                '0-100万', '100-200万', '200-300万', '300-400万', '400-500万', '500万以上'
            ],
            mockPrice: [[0, 100], [100, 200], [200, 300], [300, 400], [400, 500], [500, Infinity]]
        };
    }

    async  componentWillReceiveProps(nextProps) {
        if (this.state.community.length !== nextProps.community.length) {
            await this.setState({
                data: {
                    code: 1,
                    data: []
                },
                series: [],
                time: [],
                city: [],
                legend: [],
                community: [],
                nameOfSeries: [
                    '0-100万', '100-200万', '200-300万', '300-400万', '400-500万', '500万以上'
                ],
                mockPrice: [[0, 100], [100, 200], [200, 300], [300, 400], [400, 500], [500, Infinity]]
            });
            let community = [];
            community = nextProps.community;
            let { time, legend, series, nameOfSeries } = this.state;
            community.forEach(element => {
                time.push(element.datasSring);
            });
            legend.push(...nameOfSeries);
            time = [...new Set(time)];
            nameOfSeries.forEach((item, index) => {
                series.push({
                    name: item,
                    type: "bar",
                    stack: "总量",
                    barMaxWidth: 600,
                    "barGap": "2%",
                    "itemStyle": {
                        "normal": {
                            "label": {
                                "show": true,
                                "textStyle": {
                                    "color": "#000"
                                },
                                "position": "insideTop",
                                formatter: p => p.value > 0 ? (p.value) : ''
                            }
                        }
                    },
                    data: this.seriesDate(item, community)
                });
            });
            series.push({
                name: '总量',
                type: "line",
                stack: "总量",
                barMaxWidth: 600,
                "barGap": "2%",
                label: {
                    normal: {
                        show: true, //开启显示
                        position: 'buttom', //在上方显示
                        textStyle: { //数值样式
                            color: '#000',
                            fontSize: 12,
                        },
                        formatter: p => `${p.value > 0 ? (p.value) : ''}套\n\n${(community.reduce((res, cur) => cur.datasSring === p.name ? res = Number(cur.price) + res : res, 0) / p.value).toFixed(0)}`
                    }
                },
                "itemStyle": {
                    "normal": {
                        "label": {
                            "show": true,
                            "textStyle": {
                                "color": "#000"
                            },
                            "position": "insideTop",
                            formatter: p => p.value > 0 ? (p.value) : ''
                        }
                    }
                },
                data: this.forLineData(community)
            });
            this.setState({ community, series, legend, time });
        }
    }

    getIndex(price) {
        let { mockPrice } = this.state;
        return mockPrice.reduce((price, curMockPrice, index) => {
            if (price >= curMockPrice[0] && price <= curMockPrice[1]) {
                return index;
            } else {
                return price;
            }
        }, Number(price.toFixed(0)));
    }

    rangePrice(price) {
        return this.state.nameOfSeries.find(priceRange => {
            let [min, max = Infinity] = priceRange.replace('万', '').split('-');
            if (Number(price.toFixed(0) >= min && Number(price.toFixed(0) <= max))) {
                return true;
            }
        });
    }

    /**
     *
     * @param {priceRange 价格的所属范围,将这个字符分解后获取价格范围,然后再通过全部数据的遍历获取在这个范围的数据,获取到后再讲数据以日期进行分解排序} priceRange
     * @param {全部的时间} time
     * @param {全部的数据} community
     * 这里要返回一个 [全部时间的一个数组,对应着每个日期都要有数据]
     * 这里要返回一个 [这里的数组是该价格段每个日期对应有几个,比如200万,每个日期有几个]
     */
    seriesDate(priceRange, community) {
        const flattenArray = (arr, depth = 1) => arr.reduce((a, v) => a.concat(depth > 1 && Array.isArray(v) ? flattenArray(v, depth - 1) : v), []);
        let allPriceRange = [];
        community.forEach(item => {
            let [min, max = Infinity] = priceRange.replace('万', '').split('-');
            if (Number(item.price) >= min && Number(item.price) <= max) {
                return allPriceRange.push({ [item.datasSring]: item });
            }
        });
        /**
         * 现在获取到了全部的日期数据,现在格式是这样的 ['2019-4-21','2019-4-22','2019-4-24','2019-4-25','2019-4-21','2019-4-21']
         * 现在需要做的是做个对象 {'2019-4-21':3,'2019-4-22':1,'2019-4-24':1,'2019-4-25':1}
         */
        let datasSringArray = flattenArray(allPriceRange).map(item => Object.keys(item));
        let initData = community.reduce((res, cur) => Object.assign(res, { [cur.datasSring]: 0 }), {});
        return Object.values(datasSringArray.reduce((res, cur) => res[cur] ? Object.assign(res, { [cur]: res[cur] + 1 }) : Object.assign(res, { [cur]: 1 }), initData));
    }

    /**
     *
     * @param {* 全部的小区数据 作图全部小区总数没问题} community
     */
    forLineData(community) {
        return Object.values(community.reduce((res, cur) => res[cur.datasSring] ? Object.assign(res, { [cur.datasSring]: res[cur.datasSring] + 1 }) : Object.assign(res, { [cur.datasSring]: 1 }), {}));
    }

    render() {
        let option = {
            // backgroundColor: "#344b58",
            "title": {
                "text": "最近30日内本车出行时段统计",
                "subtext": '阿米丢制图',
                x: "4%",
                textStyle: {
                    color: '#000',
                    fontSize: '22'
                },
                subtextStyle: {
                    color: '#90979c',
                    fontSize: '16',
                },
            },
            "tooltip": {
                "trigger": "axis",
                "axisPointer": {
                    "type": "shadow",
                    textStyle: {
                        color: "#000"
                    }

                },
            },
            "grid": {
                "borderWidth": 0,
                "top": 110,
                "bottom": 95,
                textStyle: {
                    color: "#000"
                }
            },
            "legend": {
                x: '4%',
                top: '11%',
                textStyle: {
                    color: '#90979c',
                },
                "data": this.state.nameOfSeries
            },
            "calculable": true,
            "xAxis": [{
                "type": "category",
                "axisLine": {
                    lineStyle: {
                        color: '#90979c'
                    }
                },
                "splitLine": {
                    "show": false
                },
                "axisTick": {
                    "show": false
                },
                "splitArea": {
                    "show": false
                },
                "axisLabel": {
                    "interval": 0,

                },
                "data": this.state.time,
            }],
            "yAxis": [{
                "type": "value",
                "splitLine": {
                    "show": false
                },
                "axisLine": {
                    lineStyle: {
                        color: '#90979c'
                    }
                },
                "axisTick": {
                    "show": false
                },
                "axisLabel": {
                    "interval": 0,

                },
                "splitArea": {
                    "show": false
                },

            }],
            "dataZoom": [{
                "show": true,
                "height": 30,
                "xAxisIndex": [
                    0
                ],
                bottom: 30,
                "start": 10,
                "end": 80,
                handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
                handleSize: '110%',
                handleStyle: {
                    color: "#d3dee5",

                },
                textStyle: {
                    color: "#000"
                },
                borderColor: "#90979c"


            }, {
                "type": "inside",
                "show": true,
                "height": 15,
                "start": 1,
                "end": 35
            }],
            "series": this.state.series
        };
        return (
            <div className="xc-body-wrapper">
                <LineChart option={option} height={700} />
            </div>
        );
    }
}