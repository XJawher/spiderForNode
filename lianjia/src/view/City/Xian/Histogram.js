import React, {useEffect, useState} from 'react';
import ecStat from 'echarts-stat';
import {Button} from 'antd';
import {useMappedState} from "redux-react-hook";
// import http from '../../../http/http';
import WeekIncrease from './WeekIncrease';

const mapState = (state) => {
    return ({
        xian: state.main.xian,
        community: state.main.community,
        weekIncrease: state.main.weekIncrease,
    });
};

/**
 * 查两次的数据:
 * 分开查询,第一次和第二次的数据
 * do not delete those commit !!!!!!!!!
 * Data preparation for weekly house price growth has been completed
 * Completed data preparation for weekly house price growth
 */

export default function Histogram (props){

    const [administrative, setAdministrativeByChoice] = useState('西咸');
    const {xian, community, weekIncrease} = useMappedState(mapState);
    let outliers = (area, price, priceSign, datasSring, administrative) => {
        // let bins = ecStat.statistics.median(height.sort((a, b) => a - b)); // 中位数
        // let bins = ecStat.statistics.deviation(height.sort((a, b) => a - b)); // 返回输入数组 dataList 的标准差。如果 dataList 为空或者长度小于 2，返回 0 标准差就是为了描述数据集的波动大小而发明,越小数据波动越小,越集中
        // let bins = ecStat.statistics.sampleVariance(height.sort((a, b) => a - b)); // 返回输入数组 dataList 的样本方差。如果 dataList 为空或者长度小于 2，返回 0.
        // let bins = ecStat.statistics.quantile(height.sort((a, b) => a - b), 0.5); // dataList : Array.<number>. 输入的数值数组，该数组必须是按从小到大有序排列的.
        // p: number. 分位数，取值在 [0, 1] 之间. 例如, 第一四分位数对应的 p 值是 0.25；第二四分位数，也就是中位数，对应的 p 值是 0.5；第三四分位数对应的 p 值是 0.75.
        //quantileValue: number. 计算得到的分位数值。如果输入的 p 值小于等于 0 或者 dataList 的长度小于2，则返回有序数组 dataList 的第一个值；如果输入的 p 值大于等于1，
        //则返回有序数组 dataList 的最后一个值；如果输入的有序数组 dataList 为空，则返回 0.
        // let bins = ecStat.statistics.mean(height.sort((a, b) => a - b)); // 返回输入数组 dataList 的平均值
        let priceMiddle = '';
        let areaMiddle = '';
        let averageArea = '';
        let averagePrice = '';
        let priceSignMiddle = '';
        let priceSignAverage = '';
        [area, price, priceSign].forEach((ele, index) => {
            // let name = ['area', 'price'];
            // let quantile1 = ecStat.statistics.quantile(ele.sort((a, b) => a - b), 0.25).toFixed(2);
            let quantile2 = ecStat.statistics.quantile(ele.sort((a, b) => a - b), 0.5).toFixed(2);
            let average = ecStat.statistics.mean(ele.sort((a, b) => a - b)).toFixed(2);
            // let bins = ecStat.statistics.mean(height.sort((a, b) => a - b)); // 返回输入数组 dataList 的平均值

            // let quantile3 = ecStat.statistics.quantile(ele.sort((a, b) => a - b), 0.75).toFixed(2);
            // let IQR = quantile3 - quantile1;
            // let max = quantile3 + 3 * IQR;
            // let min = quantile1 - 3 * IQR;
            switch (index) {
                case 0:
                    areaMiddle = quantile2;
                    averageArea = average;
                    break;

                case 1:
                    priceMiddle = quantile2;
                    averagePrice = average;
                    break;

                case 2:
                    priceSignMiddle = quantile2;
                    priceSignAverage = average;

                    break;

                default:
                    break;
            }
            // console.log(`${[datasSring, administrative].join(',')} ${name[index]} 标准差 ${ecStat.statistics.deviation(ele.sort((a, b) => a - b)).toFixed(2)}`);
            // console.log(`${[datasSring, administrative].join(',')} ${name[index]} 第1四分位数 ${quantile1}`);
            // console.log(`${[datasSring, administrative].join(',')} ${name[index]} 第2四分位数 ${quantile2}`);
            // console.log(`${[datasSring, administrative].join(',')} ${name[index]} 第3四分位数 ${quantile3}`);
            // console.log(`${[datasSring, administrative].join(',')} ${name[index]} 变异值 ${IQR}`);
            // console.log(`${[datasSring, administrative].join(',')} ${name[index]} max ${max}`);
            // console.log(`${[datasSring, administrative].join(',')} ${name[index]} min ${min}`);

        });

        return {administrative, datasSring, priceMiddle, areaMiddle, averagePrice, averageArea, priceSignMiddle, priceSignAverage};
    };

    useEffect(() => {
        let data = [];
        let date = '';
        //do not delete those commit
        if (xian.length) {
            let splitData = setAdministrative(xian);
            splitData.forEach(item => {
                if (item.data.length) {
                    let {area, price, priceSign, datasSring, administrative} = insertData(item);
                    date = datasSring;
                    data.push(outliers(area, price, priceSign, datasSring, administrative));
                }
            });
            console.log(JSON.stringify({[date]: data}));
        }
    }, [xian]);

    /**
     * @param { {datasSring:'',addressSupplement:'xxx|x |xxx',price:''} } data
     */
    const insertData = (data) => {
        ///单价12701元/平米
        let flood = [];
        let price = [];
        let address = [];
        let area = [];
        let datasSring = '';
        let priceSign = [];
        data.data.forEach(item => {
            price.push(Number(item.price));
            address.push(item.address);
            datasSring = item.datasSring;
            let areaSign = item.addressSupplement.replace('平米', '').split('|');
            priceSign.push(Number(item.priceSign.replace(/单价|元|\/|平米/g, '')));
            areaSign.forEach(item => {
                if (Number(item.trim())) {
                    area.push(Number(item.trim()));
                }
            });
            flood.push(item.flood);
        });

        return {area, price, priceSign, datasSring, administrative: data.administrative};
    };

    // 设置行政区划的数据
    const setAdministrative = (data) => {

        let xixian = [];
        let gaoling = [];
        let gaoxin = [];
        let changan = [];
        let qujiang = [];
        let chanba = [];
        let chengxi = [];
        let chengnan = [];
        let chengbei = [];
        let chengdong = [];
        let jingkai = [];
        let chengnei = [];
        let datasSring = '';
        data.forEach(element => {
            datasSring = element.datasSring;
            switch (element.flood) {
                case '西咸':
                    xixian.push(element);
                    break;
                case '曲江':
                    qujiang.push(element);
                    break;
                case '高陵':
                    gaoling.push(element);
                    break;
                case '长安':
                    changan.push(element);
                    break;
                case '浐灞':
                    chanba.push(element);
                    break;
                case '城西':
                    chengxi.push(element);
                    break;
                case '高新':
                    gaoxin.push(element);
                    break;
                case '城南':
                    chengnan.push(element);
                    break;
                case '城北':
                    chengbei.push(element);
                    break;
                case '城东':
                    chengdong.push(element);
                    break;
                case '经开':
                    jingkai.push(element);
                    break;
                case '城内':
                    chengnei.push(element);
                    break;

                default:
                    break;
            }
        });

        return [
            {administrativeCH: 'xixian', administrative: '西咸', datasSring: datasSring, data: xixian},
            {administrativeCH: 'qujiang', administrative: '曲江', datasSring: datasSring, data: qujiang},
            {administrativeCH: 'gaoling', administrative: '高陵', datasSring: datasSring, data: gaoling},
            {administrativeCH: 'changan', administrative: '长安', datasSring: datasSring, data: changan},
            {administrativeCH: 'chanba', administrative: '浐灞', datasSring: datasSring, data: chanba},
            {administrativeCH: 'chengxi', administrative: '城西', datasSring: datasSring, data: chengxi},
            {administrativeCH: 'gaoxin', administrative: '高新', datasSring: datasSring, data: gaoxin},
            {administrativeCH: 'chengnan', administrative: '城南', datasSring: datasSring, data: chengnan},
            {administrativeCH: 'chengdong', administrative: '城北', datasSring: datasSring, data: chengdong},
            {administrativeCH: 'chengbei', administrative: '城东', datasSring: datasSring, data: chengbei},
            {administrativeCH: 'jingkai', administrative: '经开', datasSring: datasSring, data: jingkai},
            {administrativeCH: 'chengnei', administrative: '城内', datasSring: datasSring, data: chengnei},
        ];
    };

    let choseAdministrative = (administrative) => {
        setAdministrativeByChoice(administrative);
    };
    return (
        <div className="xc-histogram-dash">
            <div>
                {community.map(item => <span key={item.administrativeCH}><Button type={administrative === item.administrative ? 'primary' : ''} onClick={() => choseAdministrative(item.administrative)}> {item.administrative}</Button></span>)}
            </div>
            {/* <span>输入日期:<Input style={{ width: 250 }} /></span>
            <span><Button type='primary'>查询</Button></span> */}

            <WeekIncrease administrative={administrative} weekIncrease={weekIncrease} />
        </div>
    );
}
