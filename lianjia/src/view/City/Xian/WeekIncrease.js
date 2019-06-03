import React, { } from 'react';
import LineChart from '../../../components/LineChart/LineChart';

export default function WeekIncrease (props){

    let colors = ['#5793f3', '#d14a61', '#675bba', '#1eb7d0', '#980eef', '#08b34c'];
    let xAxisData = [];

    let seriesAreaMiddle = [];
    let seriesAverageArea = [];
    let seriesPriceMiddle = [];
    let seriesAveragePrice = [];
    let seriesPriceSignMiddle = [];
    let seriesPriceSignAverage = [];

    /**
     * ?
     * *
     * !
     *
     * *
     *
     * TODO:
     *
     *
     * @param {*} parma
     */
    const showRacing = (parma) => {
        // let seriesName  Unit of measurement
        let unitOfMeasurement = '';
        if (parma.seriesName.includes('面积')) {
            unitOfMeasurement = '\n平米';
        } else if (parma.seriesName.includes('单价')) {
            unitOfMeasurement = '万/平米';
        } else {
            unitOfMeasurement = '万';
        }
        return `${parma.value}${unitOfMeasurement}`;
    };

    //  "priceSignMiddle": "14131.00", "priceSignAverage": "14609.01" seriesPriceSignMiddle  seriesPriceSignAverage
    for (const [key, values] of Object.entries(props.weekIncrease)) {
        xAxisData.push(key);
        values.forEach(element => {
            if (element.administrative === props.administrative) {
                seriesPriceMiddle.push(element.priceMiddle);
                seriesAreaMiddle.push(element.areaMiddle);

                seriesPriceSignMiddle.push(element.priceSignMiddle);
                seriesPriceSignAverage.push(element.priceSignAverage);

                seriesAveragePrice.push(element.averagePrice);
                seriesAverageArea.push(element.averageArea);
            }
        });
    }
    let option = {
        color: colors,
        title: {
            text: `${props.administrative} 数据`
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {type: 'cross'}
        },
        grid: {
            right: '20%'
        },
        legend: {
            data: ['平均面积', '中位数面积', '平均价格', '中位数价格', '平均单价', '中位数单价']
        },
        xAxis: [
            {
                type: 'category',
                splitLine: {show: false},//去除网格线
                axisTick: {
                    alignWithLabel: false
                },
                splitArea: {show: false},//保留网格区域
                data: xAxisData
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '平均面积',
                position: 'right',
                min: 50,
                offset: 80,
                max: 280,
                splitLine: {show: false},//去除网格线
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
                splitLine: {show: false},//去除网格线
                position: 'right',
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
                splitLine: {show: false},//去除网格线
                min: 50,
                max: 350,
                offset: 60,
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
                min: 0,
                splitLine: {show: false},//去除网格线
                max: 250,
                position: 'left',
                axisLine: {
                    lineStyle: {
                        color: colors[3]
                    }
                },
                axisLabel: {
                    formatter: '{value} 万'
                }
            },
            {
                type: 'value',
                name: '平均单价',
                position: 'left',
                min: 3000,
                splitLine: {show: false},//去除网格线
                max: 20000,
                offset: 270,
                axisLine: {
                    lineStyle: {
                        color: colors[4]
                    }
                },
                axisLabel: {
                    formatter: '{value} /平米'
                }
            },
            {
                type: 'value',
                name: '中位数单价',
                min: 3000,
                max: 20000,
                position: 'right',
                offset: 160,
                axisLine: {
                    lineStyle: {
                        color: colors[5]
                    }
                },
                axisLabel: {
                    formatter: '{value} /平米'
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
                        formatter: showRacing,
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
                        formatter: showRacing,
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
                        formatter: showRacing,
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
            },
            {
                name: '平均单价',
                type: 'line',
                yAxisIndex: 4,
                itemStyle: {
                    normal: {
                        color: colors[4]
                    }
                },
                label: {
                    normal: {
                        show: true, //开启显示
                        position: 'top', //在上方显示
                        formatter: showRacing,
                        textStyle: { //数值样式
                            color: 'black',
                            fontSize: 12,
                        }
                    }
                }, //seriesPriceSignMiddle  seriesPriceSignAverage
                data: seriesPriceSignAverage
            },
            {
                name: '中位数单价',
                type: 'line',
                yAxisIndex: 5,
                itemStyle: {
                    normal: {
                        color: colors[5]
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
                data: seriesPriceSignMiddle
            }
        ]
    };

    return (
        <div className="xc-week-increase">
            <LineChart option={option} />
        </div>
    );
}
