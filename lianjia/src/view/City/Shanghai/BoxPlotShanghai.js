/* eslint-disable no-unused-expressions */
// BoxPlotShanghai
import React, {Component} from 'react';
import ecStat from 'echarts-stat';
import echarts from 'echarts';
import LineChart from '../../../components/LineChart/LineChart';
require('echarts/dist/extension/dataTool');

export default class BoxPlotShanghai extends Component {
    constructor (props){
        super(props);
        this.state = {
            area: []
        };
    }

    componentWillReceiveProps (nextProps){
        let {area} = nextProps;
        // if (area.length) {
        //     this.outliers(area);
        // }
        this.setState({area});
    }

    outliers (area){
        // let bins = ecStat.statistics.median(height.sort((a, b) => a - b)); // 中位数
        // let bins = ecStat.statistics.deviation(height.sort((a, b) => a - b)); // 返回输入数组 dataList 的标准差。如果 dataList 为空或者长度小于 2，返回 0 标准差就是为了描述数据集的波动大小而发明,越小数据波动越小,越集中
        // let bins = ecStat.statistics.sampleVariance(height.sort((a, b) => a - b)); // 返回输入数组 dataList 的样本方差。如果 dataList 为空或者长度小于 2，返回 0.
        // let bins = ecStat.statistics.quantile(height.sort((a, b) => a - b), 0.5); // dataList : Array.<number>. 输入的数值数组，该数组必须是按从小到大有序排列的.
        // p: number. 分位数，取值在 [0, 1] 之间. 例如, 第一四分位数对应的 p 值是 0.25；第二四分位数，也就是中位数，对应的 p 值是 0.5；第三四分位数对应的 p 值是 0.75.
        //quantileValue: number. 计算得到的分位数值。如果输入的 p 值小于等于 0 或者 dataList 的长度小于2，则返回有序数组 dataList 的第一个值；如果输入的 p 值大于等于1，
        //则返回有序数组 dataList 的最后一个值；如果输入的有序数组 dataList 为空，则返回 0.
        // let bins = ecStat.statistics.mean(height.sort((a, b) => a - b)); // 返回输入数组 dataList 的平均值

        let quantile1 = ecStat.statistics.quantile(area.sort((a, b) => a - b), 0.25);
        let quantile2 = ecStat.statistics.quantile(area.sort((a, b) => a - b), 0.5);
        let quantile3 = ecStat.statistics.quantile(area.sort((a, b) => a - b), 0.75);
        let IQR = quantile3 - quantile1;
        let max = quantile3 + 1.5 * IQR;
        let min = quantile1 - 1.5 * IQR;
        console.log(`标准差 ${ecStat.statistics.deviation(area.sort((a, b) => a - b))}`);
        console.log(`第一四分位数 ${quantile1}`);
        console.log(`第2四分位数 ${quantile2}`);
        console.log(`第3四分位数 ${quantile3}`);
        console.log(`变异值 ${IQR}`);
        console.log(`max ${max}`);
        console.log(`min ${min}`);
    }

    getNumberInNormalDistribution (mean, stdDev){
        return mean + (this.randomNormalDistribution() * stdDev);
    }

    randomNormalDistribution (){
        let u = 0.0, v = 0.0, w = 0.0, c = 0.0;
        do {
            //获得两个（-1,1）的独立随机变量
            u = Math.random() * 2 - 1.0;
            v = Math.random() * 2 - 1.0;
            w = u * u + v * v;
        } while (w === 0.0 || w >= 1.0);
        //这里就是 Box-Muller转换
        c = Math.sqrt((-2 * Math.log(w)) / w);
        //返回2个标准正态分布的随机数，封装进一个数组返回
        //当然，因为这个函数运行较快，也可以扔掉一个
        //return [u*c,v*c];
        return u * c;
    }

    render (){
        let heightArray = Array.from({length: 1000}, () => 10);
        let height = [];
        heightArray.forEach(item => height.push(Number(this.getNumberInNormalDistribution(item, 15).toFixed(0))));
        this.state.area.length > 0 ? height = this.state.area : '';
        console.log(this.state.area.reduce((res, cur) => cur > 300 ? res = res + 1 : res, 0));

        let data = echarts.dataTool.prepareBoxplotData([this.state.area.filter(item => item < 286)]);

        let option = {
            title: [
                {
                    text: 'Michelson-Morley Experiment',
                    left: 'center',
                },
                {
                    text: 'upper: Q3 + 1.5 * IQR \nlower: Q1 - 1.5 * IQR',
                    borderColor: '#999',
                    borderWidth: 1,
                    textStyle: {
                        fontSize: 14
                    },
                    left: '10%',
                    top: '90%'
                }
            ],
            tooltip: {
                trigger: 'item',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                left: '10%',
                right: '10%',
                bottom: '15%'
            },
            xAxis: {
                type: 'category',
                data: data.axisData,
                boundaryGap: true,
                nameGap: 30,
                splitArea: {
                    show: false
                },
                axisLabel: {
                    formatter: 'expr {value}'
                },
                splitLine: {
                    show: false
                }
            },
            yAxis: {
                type: 'value',
                name: 'km/s minus 299,000',
                splitArea: {
                    show: true
                }
            },
            series: [
                {
                    name: 'boxplot',
                    type: 'boxplot',
                    data: data.boxData,
                    tooltip: {
                        formatter: function (param){
                            return [
                                'Experiment ' + param.name + ': ',
                                'upper: ' + param.data[5],
                                'Q3: ' + param.data[4],
                                'median: ' + param.data[3],
                                'Q1: ' + param.data[2],
                                'lower: ' + param.data[1]
                            ].join('<br/>');
                        }
                    }
                },
                {
                    name: 'outlier',
                    type: 'scatter',
                    data: data.outliers
                }
            ]
        };
        return (
            <div>
                <div className='xc-wrapper-linear-sh'>
                    <div> this is BoxPlotShanghai part</div>
                    <div><LineChart option={option} /></div>
                </div>
            </div>
        );
    }
}