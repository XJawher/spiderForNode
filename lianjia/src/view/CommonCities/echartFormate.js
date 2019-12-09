/* eslint-disable no-undef */
option = {
    backgroundColor: '#00265f',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['5-26', '6-20', '7-25', '8-18', '9-24', '10-25', "11-29"],
        align: 'right',
        right: 10,
        textStyle: {
            color: "#fff"
        },
        itemWidth: 10,
        itemHeight: 10,
        itemGap: 35
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    // 城东 从2019-4-21 13574.00/平到2019-11-29 12544.00/平单价下跌-1030/平,跌幅-7.59%
    // 高新 从2019-4-21 17911.00/平到2019-11-29 16939.00/平单价下跌-972/平,跌幅-5.43%
    // 城南  从2019-4-21 14681.50/平到2019-11-29 14011.50/平单价下跌-670.5/平,跌幅-4.56%
    // 城内  从2019-4-21 12223.00/平到2019-11-29 11689.00/平单价下跌-534/平,跌幅-4.37%
    // 经开  从2019-4-21 14211.00/平到2019-11-29 13919.00/平单价下跌-292/平,跌幅-2.05%
    // 曲江  从2019-4-21 19566.00/平到2019-11-29 19286.00/平单价下跌-280/平,跌幅-1.43%
    // 城西  从2019-4-21 14430.00/平到2019-11-29 14184.00/平单价下跌-246/平,跌幅-1.7%
    // 长安  从2019-4-21 13784.00/平到2019-11-29 13638.00/平单价下跌-146/平,跌幅-1.06%
    // 西咸  从2019-4-21 14276.00/平到2019-11-29 14428.00/平单价上涨152/平,涨幅1.06%
    // 城北  从2019-4-21 13004.00/平到2019-11-29 13159.50/平单价上涨155.5/平,涨幅1.2%
    // 浐灞  从2019-4-21 14435.00/平到2019-11-29 14635.00/平单价上涨200/平,涨幅1.39%
    // 高陵  从2019-4-21 7745.50/平到2019-11-29 7958.00/平单价上涨212/平,涨幅2.74%
    xAxis: [{
        type: 'category',
        data: [
            '城东',
            '高新',
            '城南',
            '城内',
            '经开',
            '曲江',
            '城西',
            '长安',
            '西咸',
            '城北',
            '浐灞',
            '高陵',
        ],
        axisLine: {
            show: true,
            lineStyle: {
                color: "#063374",
                width: 1,
                type: "solid"
            }
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#00c7ff",
            }
        },
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
            formatter: '{value} %'
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: "#00c7ff",
                width: 1,
                type: "solid"
            },
        },
        splitLine: {
            lineStyle: {
                color: "#063374",
            }
        }
    }],
    series: [
        // '5-26', '6-20', '7-25', '8-18', '9-24', '10-25', "11-29"
        {
            name: '5-26',
            type: 'bar',
            data: [20, 50, 80, 58, 83, 68, 57, 80, 42, 66, 23, 56],
            barWidth: 10, //柱子宽度
            barGap: 1, //柱子之间间距
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#008cff'
                    }, {
                        offset: 1,
                        color: '#005193'
                    }]),
                    opacity: 1,
                }
            }
        },
        {
            name: '6-20',
            type: 'bar',
            data: [50, 70, 60, 61, 75, 87, 60, 62, 86, 46, 23, 56],
            barWidth: 10,
            barGap: 1,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#00da9c'
                    }, {
                        offset: 1,
                        color: '#007a55'
                    }]),
                    opacity: 1,
                }
            }
        },
        {
            name: '7-25',
            type: 'bar',
            data: [50, 70, 60, 61, 75, 87, 60, 62, 86, 46, 23, 56],
            barWidth: 10,
            barGap: 1,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#4c5bd2'
                    }, {
                        offset: 1,
                        color: '#37429c'
                    }]),
                    opacity: 1,
                }
            }
        },
        {
            name: '8-18',
            type: 'bar',
            data: [50, 70, 60, 61, 75, 87, 60, 62, 86, 46, 23, 56],
            barWidth: 10,
            barGap: 1,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#e43c59'
                    }, {
                        offset: 1,
                        color: '#e65971'
                    }]),
                    opacity: 1,
                }
            }
        },
        {
            name: '9-24',
            type: 'bar',
            data: [50, 70, 60, 61, 75, 87, 60, 62, 86, 46, 23, 56],
            barWidth: 10,
            barGap: 1,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#2fa58b'
                    }, {
                        offset: 1,
                        color: '#47e4c2'
                    }]),
                    opacity: 1,
                }
            }
        },
        {
            name: '10-25',
            type: 'bar',
            data: [50, 70, 60, 61, 75, 87, 60, 62, 86, 46, 23, 56],
            barWidth: 10,
            barGap: 1,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#663399'
                    }, {
                        offset: 1,
                        color: '#8a47cead'
                    }]),
                    opacity: 1,
                }
            }
        },
        {
            name: '11-29',
            type: 'bar',
            data: [70, 48, 73, 68, 53, 47, 50, 72, 96, 86, 23, 56],
            barWidth: 10,
            barGap: 1,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#c4e300'
                    }, {
                        offset: 1,
                        color: '#728400'
                    }]),
                    opacity: 1,
                }
            }
        }
    ]
};