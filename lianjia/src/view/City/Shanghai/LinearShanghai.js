import React, { Component } from 'react';
import ecStat from 'echarts-stat';
import LineChart from '../../../components/LineChart/LineChart';

export default class LinearShanghai extends Component {
    constructor(props) {
        super(props);
        this.state = {
            estate: { // 历年的房产数据, over the years of estate data constructionArea area is construction for this year,and house is for residence,not for business
                '1985': { constructionArea: 4162.15, constructionAreaHouse: 2651.5, beCompletedArea: 2909.58, beCompletedAreaHouse: 2112.04 },
                '1986': { constructionArea: 4874.44, constructionAreaHouse: 2469.27, beCompletedArea: 2493.93, beCompletedAreaHouse: 1790.01 },
                '1987': { constructionArea: 4382.40, constructionAreaHouse: 2658.05, beCompletedArea: 2700.96, beCompletedAreaHouse: 1874.90 },
                '1988': { constructionArea: 4369.20, constructionAreaHouse: 2667.00, beCompletedArea: 2457.34, beCompletedAreaHouse: 1758.29 },
                '1989': { constructionArea: 3683.77, constructionAreaHouse: 2048.20, beCompletedArea: 1941.80, beCompletedAreaHouse: 1246.58 },
                '1990': { constructionArea: 3801.46, constructionAreaHouse: 2269.06, beCompletedArea: 2138.44, beCompletedAreaHouse: 1339.02 },
                '1991': { constructionArea: 3611.53, constructionAreaHouse: 2157.46, beCompletedArea: 1923.92, beCompletedAreaHouse: 1160.61 },
                '1992': { constructionArea: 4709.52, constructionAreaHouse: 2463.79, beCompletedArea: 2608.20, beCompletedAreaHouse: 1379.18 },
                '1993': { constructionArea: 4724.30, constructionAreaHouse: 2142.39, beCompletedArea: 2031.76, beCompletedAreaHouse: 1017.54 },
                '1994': { constructionArea: 6720.70, constructionAreaHouse: 3520.27, beCompletedArea: 2519.09, beCompletedAreaHouse: 1349.24 },
                '1995': { constructionArea: 10566.42, constructionAreaHouse: 6195.12, beCompletedArea: 3093.93, beCompletedAreaHouse: 1746.82 },
                '1996': { constructionArea: 10730.85, constructionAreaHouse: 5874.26, beCompletedArea: 3254.57, beCompletedAreaHouse: 1872.65 },
                '1997': { constructionArea: 9955.21, constructionAreaHouse: 5450.13, beCompletedArea: 3614.19, beCompletedAreaHouse: 2179.68 },
                '1998': { constructionArea: 9364.36, constructionAreaHouse: 5113.52, beCompletedArea: 3364.43, beCompletedAreaHouse: 1963.51 },
                '1999': { constructionArea: 8364.48, constructionAreaHouse: 4608.49, beCompletedArea: 3257.57, beCompletedAreaHouse: 1731.55 },
                '2000': { constructionArea: 8636.31, constructionAreaHouse: 4804.12, beCompletedArea: 3266.52, beCompletedAreaHouse: 1724.02 },
                '2001': { constructionArea: 8588.49, constructionAreaHouse: 5236.93, beCompletedArea: 3215.12, beCompletedAreaHouse: 1743.90 },
                '2002': { constructionArea: 9425.42, constructionAreaHouse: 5994.70, beCompletedArea: 3102.54, beCompletedAreaHouse: 1880.50 },
                '2003': { constructionArea: 11023.24, constructionAreaHouse: 6974.27, beCompletedArea: 3582.34, beCompletedAreaHouse: 2280.79 },
                '2004': { constructionArea: 12291.81, constructionAreaHouse: 7873.44, beCompletedArea: 4932.57, beCompletedAreaHouse: 3270.43 },
                '2005': { constructionArea: 14477.85, constructionAreaHouse: 8267.24, beCompletedArea: 4873.82, beCompletedAreaHouse: 2819.35 },
                '2006': { constructionArea: 14596.49, constructionAreaHouse: 8085.28, beCompletedArea: 4901.46, beCompletedAreaHouse: 2746.80 },
                '2007': { constructionArea: 14979.37, constructionAreaHouse: 7789.91, beCompletedArea: 5068.46, beCompletedAreaHouse: 2843.62 },
                '2008': { constructionArea: 14083.52, constructionAreaHouse: 7060.19, beCompletedArea: 3828.79, beCompletedAreaHouse: 1899.40 },
                '2009': { constructionArea: 13553.64, constructionAreaHouse: 6581.16, beCompletedArea: 2970.92, beCompletedAreaHouse: 1522.07 },
                '2010': { constructionArea: 15020.76, constructionAreaHouse: 7344.07, beCompletedArea: 2776.21, beCompletedAreaHouse: 1415.44 },
                '2011': { constructionArea: 12983.32, constructionAreaHouse: 8386.26, beCompletedArea: 2240.62, beCompletedAreaHouse: 1549.66 },
                '2012': { constructionArea: 13249.97, constructionAreaHouse: 8315.68, beCompletedArea: 2305.06, beCompletedAreaHouse: 1609.13 },
                '2013': { constructionArea: 13516.58, constructionAreaHouse: 8125.74, beCompletedArea: 2254.44, beCompletedAreaHouse: 1417.41 },
                '2014': { constructionArea: 14690.18, constructionAreaHouse: 8525.85, beCompletedArea: 2313.29, beCompletedAreaHouse: 1535.55 },
                '2015': { constructionArea: 15095.33, constructionAreaHouse: 8372.12, beCompletedArea: 2647.18, beCompletedAreaHouse: 1588.95 },
                '2016': { constructionArea: 15111.24, constructionAreaHouse: 8073.94, beCompletedArea: 2550.64, beCompletedAreaHouse: 1532.88 },
                '2017': { constructionArea: 15362.25, constructionAreaHouse: 8013.80, beCompletedArea: 3387.56, beCompletedAreaHouse: 1862.74 },
            },
            stock: {
                '1997': { TransactionsNumers: 9180, TransactionsArea: 162.40, TransactionsOfficeBuildingArea: 87.68, TransactionsHouseArea: 23.95, TransactionCommercialArea: 14.95 },
                '1998': { TransactionsNumers: 24501, TransactionsArea: 315.23, TransactionsOfficeBuildingArea: 197.56, TransactionsHouseArea: 21.49, TransactionCommercialArea: 18.28 },
                '1999': { TransactionsNumers: 44234, TransactionsArea: 510.84, TransactionsOfficeBuildingArea: 336.69, TransactionsHouseArea: 37.63, TransactionCommercialArea: 14.61 },
                '2000': { TransactionsNumers: 96348, TransactionsArea: 778.52, TransactionsOfficeBuildingArea: 648.23, TransactionsHouseArea: 39.48, TransactionCommercialArea: 21.65 },
                '2001': { TransactionsNumers: 164598, TransactionsArea: 1422.43, TransactionsOfficeBuildingArea: 1031.48, TransactionsHouseArea: 56.99, TransactionCommercialArea: 57.24 },
                '2002': { TransactionsNumers: 204239, TransactionsArea: 1790.50, TransactionsOfficeBuildingArea: 1341.60, TransactionsHouseArea: 65.70, TransactionCommercialArea: 91.80 },
                '2003': { TransactionsNumers: 263297, TransactionsArea: 2306.28, TransactionsOfficeBuildingArea: 1807.57, TransactionsHouseArea: 105.14, TransactionCommercialArea: 114.28 },
                '2004': { TransactionsNumers: 303291, TransactionsArea: 2726.70, TransactionsOfficeBuildingArea: 2222.24, TransactionsHouseArea: 117.12, TransactionCommercialArea: 121.39 },
                '2005': { TransactionsNumers: 189896, TransactionsArea: 1971.50, TransactionsOfficeBuildingArea: 1608.20, TransactionsHouseArea: 88.10, TransactionCommercialArea: 78.00 },
                '2006': { TransactionsNumers: 184194, TransactionsArea: 1706.81, TransactionsOfficeBuildingArea: 1375.22, TransactionsHouseArea: 67.35, TransactionCommercialArea: 46.53 },
                '2007': { TransactionsNumers: 213733, TransactionsArea: 1992.59, TransactionsOfficeBuildingArea: 1715.05, TransactionsHouseArea: 49.73, TransactionCommercialArea: 36.34 },
                '2008': { TransactionsNumers: 142224, TransactionsArea: 1413.41, TransactionsOfficeBuildingArea: 1107.17, TransactionsHouseArea: 40.61, TransactionCommercialArea: 42.04 },
                '2009': { TransactionsNumers: 312857, TransactionsArea: 2809.45, TransactionsOfficeBuildingArea: 2490.58, TransactionsHouseArea: 48.19, TransactionCommercialArea: 43.59 },
                '2010': { TransactionsNumers: 202511, TransactionsArea: 1966.86, TransactionsOfficeBuildingArea: 1522.21, TransactionsHouseArea: 68.31, TransactionCommercialArea: 70.61 },
                '2011': { TransactionsNumers: 146151, TransactionsArea: 1398.67, TransactionsOfficeBuildingArea: 1058.71, TransactionsHouseArea: 62.87, TransactionCommercialArea: 51.21 },
                '2012': { TransactionsNumers: 157585, TransactionsArea: 1446.77, TransactionsOfficeBuildingArea: 1136.17, TransactionsHouseArea: 57.34, TransactionCommercialArea: 46.71 },
                '2013': { TransactionsNumers: 291176, TransactionsArea: 2575.70, TransactionsOfficeBuildingArea: 2228.02, TransactionsHouseArea: 65.59, TransactionCommercialArea: 47.18 },
                '2014': { TransactionsNumers: 177083, TransactionsArea: 1586.14, TransactionsOfficeBuildingArea: 1324.18, TransactionsHouseArea: 52.61, TransactionCommercialArea: 40.90 },
                '2015': { TransactionsNumers: 303414, TransactionsArea: 2647.83, TransactionsOfficeBuildingArea: 2351.30, TransactionsHouseArea: 52.27, TransactionCommercialArea: 41.62 },
                '2016': { TransactionsNumers: 347667, TransactionsArea: 3219.80, TransactionsOfficeBuildingArea: 2225.42, TransactionsHouseArea: 450.89, TransactionCommercialArea: 261.04 },
                '2017': { TransactionsNumers: 179385, TransactionsArea: 1563.53, TransactionsOfficeBuildingArea: 1264.13, TransactionsHouseArea: 80.75, TransactionCommercialArea: 60.26 },
            },

            constructionArea: {
                constructionAreaAll: [],// 历年的全部建筑面积
                linearCompleted: [],// 线性数据,历年的建筑面积和竣工面积
            },
            constructionAreaHouse: {
                constructionAreaHouseAll: [],//历年的全部住宅建筑面积
                linearCompletedHouse: [],// 线性数据,历年的住宅建筑面积和住宅竣工面积
            },
            beCompletedAreaAll: [],// 历年的全部竣工建筑面积
            beCompletedAreaHouseAll: [],// 历年的全部住宅竣工面积
            loanPerson: {
                2001: {
                    //个人消费贷款
                    total: 1009.50, // 总额
                    person: {
                        total: 743.50, // 个人消费贷款总额
                        house: 650.00,// 按揭总额
                        cars: 22.62
                    },
                    accumulationFund: 266 // 公积金贷款
                },
                2002: {
                    //个人消费贷款
                    total: 1513.67, // 总额
                    person: {
                        total: 1195.69, // 个人消费贷款总额
                        house: 1086.71, // 按揭总额
                        cars: 41.45
                    },
                    accumulationFund: 317.98 // 公积金贷款
                },
                2003: {
                    //个人消费贷款
                    total: 2276.42, // 总额
                    person: {
                        total: 1930.03, // 个人消费贷款总额
                        house: 1709.13, // 按揭总额
                        cars: 84.68
                    },
                    accumulationFund: 346.39 // 公积金贷款
                },
                2004: {
                    //个人消费贷款
                    total: 3019.07, // 总额
                    person: {
                        total: 2672.65, // 个人消费贷款总额
                        house: 2445.53, // 按揭总额
                        cars: 79.28
                    },
                    accumulationFund: 346.42 // 公积金贷款
                },
                2005: {
                    //个人消费贷款
                    total: 3149.01, // 总额
                    person: {
                        total: 2814.16, // 个人消费贷款总额
                        house: 2644.94, // 按揭总额
                        cars: 47.85
                    },
                    accumulationFund: 334.85// 公积金贷款
                },
                2006: {
                    //个人消费贷款
                    total: 3069.15, // 总额
                    person: {
                        total: 2653.16, // 个人消费贷款总额
                        house: 2483.73, // 按揭总额
                        cars: 28.04
                    },
                    accumulationFund: 415.99// 公积金贷款
                },
                2007: {
                    //个人消费贷款
                    total: 3653.20, // 总额
                    person: {
                        total: 3071.20, // 个人消费贷款总额
                        house: 2859.92, // 按揭总额
                        cars: 27.07
                    },
                    accumulationFund: 582.00// 公积金贷款
                },
                2008: {
                    //个人消费贷款
                    total: 3799.06, // 总额
                    person: {
                        total: 3146.95, // 个人消费贷款总额
                        house: 2915.49, // 按揭总额
                        cars: 50.71
                    },
                    accumulationFund: 652.11// 公积金贷款
                },
                2009: {
                    //个人消费贷款
                    total: 5289.51, // 总额
                    person: {
                        total: 4262.65, // 个人消费贷款总额
                        house: 3912.88, // 按揭总额
                        cars: 90.89
                    },
                    accumulationFund: 1026.86// 公积金贷款
                },
                2010: {
                    //个人消费贷款
                    total: 4841.45, // 总额
                    person: {
                        total: 4399.90, // 个人消费贷款总额
                        house: 134.29, // 按揭总额
                        cars: 90.9
                    },
                    accumulationFund: 1127.45 // 公积金贷款
                },
                2011: {
                    //个人消费贷款
                    total: 5914.48, // 总额
                    person: {
                        total: 4753.99, // 个人消费贷款总额
                        cars: 662.65, // 按揭总额
                    },
                    accumulationFund: 1203.11// 公积金贷款
                },
                2012: {
                    //个人消费贷款
                    total: 6341.38, // 总额
                    person: {
                        total: 4925.98, // 个人消费贷款总额
                        cars: 822.05, // 按揭总额
                    },
                    accumulationFund: 1420.50 // 公积金贷款
                },
                2013: {
                    //个人消费贷款
                    total: 7700.47, // 总额
                    person: {
                        total: 5686.28, // 个人消费贷款总额
                        cars: 1278.30, // 按揭总额
                    },
                    accumulationFund: 1788.31// 公积金贷款
                },
                2014: {
                    //个人消费贷款
                    total: 8753.460, // 总额
                    person: {
                        total: 6258.860, // 个人消费贷款总额
                        cars: 1524.110, // 按揭总额
                    },
                    accumulationFund: 2012.000// 公积金贷款
                },
                2015: {
                    //个人消费贷款
                    total: 10751.600, // 总额
                    person: {
                        total: 7765.810, // 个人消费贷款总额
                        cars: 1869.75, // 按揭总额
                    },
                    accumulationFund: 2770.080// 公积金贷款
                },
                2016: {
                    //个人消费贷款
                    total: 15038.050, // 总额
                    person: {
                        total: 11141.860, // 个人消费贷款总额
                        cars: 2596.32
                    },
                    accumulationFund: 3257.770// 公积金贷款
                },
                2017: {
                    //个人消费贷款
                    total: 18159.180, // 总额
                    person: {
                        total: 12720.890, // 个人消费贷款总额
                        cars: 3633.34
                    },
                    accumulationFund: 3531.010// 公积金贷款
                },
            },
            area: []
        };
    }

    componentWillMount() {

        let constructionArea = {
            constructionAreaAll: [],// 历年的全部建筑面积
            linearCompleted: [],// 线性数据,历年的建筑面积和竣工面积
        };
        let constructionAreaHouse = {
            constructionAreaHouseAll: [],//历年的全部住宅建筑面积
            linearCompletedHouse: [],// 线性数据,历年的住宅建筑面积和住宅竣工面积
        };
        let beCompletedAreaAll = [];// 历年的全部竣工建筑面积
        let beCompletedAreaHouseAll = [];// 历年的全部住宅竣工面积
        let loanAll = []; // 历年全部贷款
        let loanPersonAll = []; // 历年个人贷款
        let loanCarsAll = []; // 历年车贷
        // let loanMortgageAll = []; // 按揭
        let loanCFundAll = []; // 历年公积金贷
        // eslint-disable-next-line no-unused-vars
        for (let [key, value] of Object.entries(this.state.estate)) {
            constructionArea.constructionAreaAll.push(Number(value.constructionArea));
            constructionArea.linearCompleted.push([value.beCompletedArea, value.constructionArea]);
            constructionAreaHouse.constructionAreaHouseAll.push(Number(value.constructionAreaHouse));
            constructionAreaHouse.linearCompletedHouse.push([value.beCompletedAreaHouse, value.constructionAreaHouse]);
            beCompletedAreaAll.push(Number(value.beCompletedArea));
            beCompletedAreaHouseAll.push(Number(value.beCompletedAreaHouse));
        }
        // eslint-disable-next-line no-unused-vars
        for (let [key, value] of Object.entries(this.state.loanPerson)) {
            loanAll.push(value.total);
            loanPersonAll.push(value.person.total);
            loanCarsAll.push(value.person.cars);
            loanCFundAll.push(value.accumulationFund);
        }
        this.setState({ constructionArea, constructionAreaHouse, beCompletedAreaAll, beCompletedAreaHouseAll });
        console.log(`历年的全部贷款总和 : ${eval(loanAll.join("+"))}`);
        console.log(`历年的个人贷款总和 +历年的公积金贷款: ${eval(loanPersonAll.join("+")) + eval(loanCFundAll.join("+"))}`);
        console.log(`历年车贷总和 : ${eval(loanCarsAll.join("+"))}`);

    }

    componentWillReceiveProps(nextProps) {
        let { area } = nextProps;
        if (area.length) {
            this.outliers(area);
        }
        this.setState({ area });
    }

    getNumberInNormalDistribution(mean, stdDev) {
        return mean + (this.randomNormalDistribution() * stdDev);
    }

    randomNormalDistribution() {
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

    outliers(area) {
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
        let max = quantile3 + 3 * IQR;
        let min = quantile1 - 3 * IQR;
        console.log(`标准差 ${ecStat.statistics.deviation(area.sort((a, b) => a - b))}`);
        console.log(`第一四分位数 ${quantile1}`);
        console.log(`第2四分位数 ${quantile2}`);
        console.log(`第3四分位数 ${quantile3}`);
        console.log(`变异值 ${IQR}`);
        console.log(`max ${max}`);
        console.log(`min ${min}`);
    }

    /**
     *
     * @param {*every year build new house } estate
     * @param {*stock house } stock
     * @param {you wanted to get which params data} params
     */
    estateAndStock(estate, stock, params) {

    }

    render() {
        // let heightArray = Array.from({ length: 1000 }, () => 10);
        // let height = [];
        // heightArray.forEach(item => height.push(this.getNumberInNormalDistribution(item, 15)));
        let { constructionArea, constructionAreaHouse, beCompletedAreaAll, beCompletedAreaHouseAll } = this.state;
        let data = [
            constructionArea.constructionAreaAll,
            constructionAreaHouse.constructionAreaHouseAll,
            beCompletedAreaAll,
            beCompletedAreaHouseAll
        ];
        let myRegression = ecStat.clustering.hierarchicalKMeans(data, 4, false);
        console.log(myRegression);
        let option = {
            color: ['rgb(25, 183, 207)'],
            grid: {
                left: '3%',
                right: '3%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [{
                type: 'value',
                //这个一定要设，不然barWidth和bins对应不上
                scale: true,
            }],
            yAxis: [{
                type: 'value',
            }],
            toolbox: {
                show: true,
                feature: {
                    saveAsImage: {
                        show: true,
                        excludeComponents: ['toolbox'],
                        pixelRatio: 8
                    }
                }
            },
            series: [{
                type: 'bar',
                barWidth: '99.3%',
                label: {
                    normal: {
                        show: true,
                        position: 'top',
                        textStyle: { //数值样式
                            fontSize: 8,
                        },
                        formatter: (params) => `${params.data[1]}\n ${params.data[0]}`
                    }
                },
                // barMaxWidth: 600,
                // "barGap": "2%",
                // label: {
                //     normal: {
                //         show: true, //开启显示
                //         position: 'buttom', //在上方显示
                //         textStyle: { //数值样式
                //             color: '#fff',
                //             fontSize: 16,
                //         },
                //         formatter: p => `${p.value > 0 ? (p.value) : ''}套\n\n均价:${(community.reduce((res, cur) => cur.datasSring === p.name ? res = Number(cur.price) + res : res, 0) / p.value).toFixed(0)}`
                //     }
                // },
                // "itemStyle": {
                //     "normal": {
                //         "label": {
                //             "show": true,
                //             "textStyle": {
                //                 "color": "#fff"
                //             },
                //             "position": "insideTop",
                //             formatter: p => p.value > 0 ? (p.value) : ''
                //         }
                //     }
                // },
                data: []
            }]
        };
        return (
            <div>
                <div className='xc-wrapper-linear-sh'>
                    <div> this is LinearShanghai part</div>
                    <div><LineChart option={option} /></div>
                </div>
            </div>
        );
    }
}