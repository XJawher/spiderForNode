/* eslint-disable no-unused-vars */
import React, {useEffect} from 'react';

import DashHealthy from './Healthy';
import DashUsageRate from './UsageRate';
import DashIPOS from './IPOS';
import DashLatency from './Latency';
import DashThroughput from './Throughput';
import DashDeduplication from './Deduplication';
import DashAmplification from './Amplification';
import DashDisk from './Disk';
import DashCluster from './Cluster';

export default function Echart (){
    let option = {
        title: {
            text: '折线图堆叠'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
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
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: '邮件营销',
                type: 'line',
                stack: '总量',
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: '联盟广告',
                type: 'line',
                stack: '总量',
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: '视频广告',
                type: 'line',
                stack: '总量',
                data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
                name: '直接访问',
                type: 'line',
                stack: '总量',
                data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
                name: '搜索引擎',
                type: 'line',
                stack: '总量',
                data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
        ]
    };

    let option1 = {
        title: {
            text: '堆叠区域图'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: '邮件营销',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: '联盟广告',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: '视频广告',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
                name: '直接访问',
                type: 'line',
                stack: '总量',
                areaStyle: {normal: {}},
                data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
                name: '搜索引擎',
                type: 'line',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'top'
                    }
                },
                areaStyle: {normal: {}},
                data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
        ]
    };

    let option2 = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'line',
            symbol: 'triangle',
            symbolSize: 20,
            lineStyle: {
                normal: {
                    color: 'green',
                    width: 4,
                    type: 'dashed'
                }
            },
            itemStyle: {
                normal: {
                    borderWidth: 3,
                    borderColor: 'yellow',
                    color: 'blue'
                }
            }
        }]
    };
    let option3 = {
        title: {
            text: '未来一周气温变化',
            subtext: '纯属虚构'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['最高气温', '最低气温']
        },
        toolbox: {
            show: true,
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                dataView: {readOnly: false},
                magicType: {type: ['line', 'bar']},
                restore: {},
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value} °C'
            }
        },
        series: [
            {
                name: '最高气温',
                type: 'line',
                data: [11, 11, 15, 13, 12, 13, 10],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name: '最低气温',
                type: 'line',
                data: [1, -2, 2, 5, 3, 2, 0],
                markPoint: {
                    data: [
                        {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'},
                        [{
                            symbol: 'none',
                            x: '90%',
                            yAxis: 'max'
                        }, {
                            symbol: 'circle',
                            label: {
                                normal: {
                                    position: 'start',
                                    formatter: '最大值'
                                }
                            },
                            type: 'max',
                            name: '最高点'
                        }]
                    ]
                }
            }
        ]
    };

    let option4 = {
        height: 200,
        y: 10,
        legend: [],
        labelTimeFormat: 'HH:mm:ss',
        label: [0, 1, 2, 3, 4, 5, 6, 7],
        series: [
            {
                data: [0, 1, 2, 1, 5, 6, 3, 2],
                name: '集群IOPS',
                type: 'line',
                itemStyle: {normal: {color: '#fff', lineStyle: {width: 1}}},
                area: ['#ff7315', '#ff9752'],
            },
        ]
    };

    let lang = (cn, en) => cn;

    let chartOption = {
        width: 160,
        height: 160,
        title: {
            text: 7789,
            textStyle: {
                color: '#ff9d19',
                fontSize: 12,
                align: 'center'
            },
            x: 'center',
            y: 'center',
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}: {d}%'
        },
        legend: {
            tooltip: {
                show: false
            }
        },
        // formatter: `${lang('使用率', 'Usage Rate')} \n\n ${'20%'}`,
        series: [{
            name: lang('集群容量状态', 'Cluster Capacity Status'),
            type: 'pie',
            color: ['#f6b93f', '#b5df79', '#b5ff79', '#bf2c2c'],
            data: [
                {value: 20, name: lang('已使用容量', 'Used Disk Capacity')},
                {value: 30, name: lang('可用容量1', 'Available Disk Capacity')},
                {value: 10, name: lang('可用容量2', 'Available Disk Capacity')},
                {value: 40, name: lang('可用容量3', 'Available Disk Capacity')},
            ]
        }],
    };

    useEffect(() => {
        // console.log(option);
    });

    return (
        <div >
            <div className="io-dash-row">
                <DashHealthy />
                <div className='io-diskinfo-arbitration'>
                    <DashDisk />
                    <DashCluster />
                </div>
            </div>
            <div className="io-dash-row">
                <DashUsageRate option={chartOption} />
                <DashAmplification option={option4} />
                <DashDeduplication option={option4} />
            </div>
            <div className="io-dash-row">
                <DashLatency option={option4} />
                <DashIPOS option={option4} />
                <DashThroughput option={option4} />
            </div>
        </div>
    );
}
