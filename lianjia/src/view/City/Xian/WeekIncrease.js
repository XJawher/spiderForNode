import React, { } from 'react';
import LineChart from '../../../components/LineChart/LineChart';

export default function WeekIncrease(props) {

    let colors = ['#5793f3', '#d14a61', '#675bba', '#1eb7d0'];
    let xAxisData = [];

    let seriesPriceMiddle = [];
    let seriesAreaMiddle = [];
    let seriesAveragePrice = [];
    let seriesAverageArea = [];

    const showRacing = (parma) => {
        return `${parma.value}`;
    };

    for (const [key, values] of Object.entries(props.weekIncrease)) {
        xAxisData.push(key);
        values.forEach(element => {
            if (element.administrative === props.administrative) {
                seriesPriceMiddle.push(element.priceMiddle);
                seriesAreaMiddle.push(element.areaMiddle);
                seriesAveragePrice.push(element.averagePrice);
                seriesAverageArea.push(element.averageArea);
            }
        });
    }
    let option = {
        color: colors,

        tooltip: {
            trigger: 'axis',
            axisPointer: { type: 'cross' }
        },
        grid: {
            right: '20%'
        },
        legend: {
            data: ['平均面积', '中位数面积', '平均价格', '中位数价格']
        },
        xAxis: [
            {
                type: 'category',
                axisTick: {
                    alignWithLabel: true
                },
                data: xAxisData
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '平均面积',
                position: 'right',
                min: 50,
                max: 280,
                axisLine: {
                    lineStyle: {
                        color: colors[0]
                    }
                },
                axisLabel: {
                    formatter: '{value} 平米'
                }
            },
            {
                type: 'value',
                name: '中位数面积',
                min: 50,
                max: 280,
                position: 'right',
                offset: 80,
                axisLine: {
                    lineStyle: {
                        color: colors[1]
                    }
                },
                axisLabel: {
                    formatter: '{value} 平米'
                }
            },
            {
                type: 'value',
                name: '平均价格',
                position: 'left',
                min: 50,
                max: 350,
                axisLine: {
                    lineStyle: {
                        color: colors[2]
                    }
                },
                axisLabel: {
                    formatter: '{value} 万'
                }
            },
            {
                type: 'value',
                name: '中位数价格',
                offset: 60,
                min: 50,
                max: 350,
                position: 'left',
                axisLine: {
                    lineStyle: {
                        color: colors[3]
                    }
                },
                axisLabel: {
                    formatter: '{value} 万'
                }
            }
        ],
        series: [
            {
                name: '平均面积',
                type: 'bar',
                data: seriesAverageArea,
                label: {
                    normal: {
                        show: true, //开启显示
                        position: 'inside', //在上方显示
                        textStyle: { //数值样式
                            color: '#ffffff',
                            fontSize: 12,
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: colors[0]
                    }
                },

            },
            {
                name: '中位数面积',
                type: 'bar',
                yAxisIndex: 1,
                itemStyle: {
                    normal: {
                        color: colors[1]
                    }
                },
                label: {
                    normal: {
                        show: true, //开启显示
                        position: 'inside', //在上方显示
                        textStyle: { //数值样式
                            color: '#ffffff',
                            fontSize: 12,
                        },
                    }
                },
                data: seriesAreaMiddle
            },
            {
                name: '平均价格',
                type: 'line',
                yAxisIndex: 2,
                itemStyle: {
                    normal: {
                        color: colors[2]
                    }
                },
                label: {
                    normal: {
                        show: true, //开启显示
                        position: 'top', //在上方显示
                        textStyle: { //数值样式
                            color: 'black',
                            fontSize: 12,
                        }
                    }
                },
                data: seriesAveragePrice
            },
            {
                name: '中位数价格',
                type: 'line',
                yAxisIndex: 3,
                itemStyle: {
                    normal: {
                        color: colors[3]
                    }
                },
                label: {
                    normal: {
                        show: true, //开启显示
                        position: 'top', //在上方显示
                        textStyle: { //数值样式
                            color: 'black',
                            fontSize: 12,
                        },
                        formatter: showRacing,
                    }
                },
                data: seriesPriceMiddle
            }
        ]
    };

    return (
        <div className="xc-week-increase">
            <LineChart option={option} />
        </div>
    );
}
