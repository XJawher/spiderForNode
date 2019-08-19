import React, {useEffect, useState} from 'react';
// import ecStat from 'echarts-stat';
import {Button} from 'antd';
import {useMappedState} from "redux-react-hook";
// import http from '../../../http/http';
import WeekIncrease from '../../../components/DataFiltering/WeekIncrease';
import {outliers, insertData} from '../../../components/DataFiltering/DataFiltering';

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

export default function Histogram(props) {

    const [administrative, setAdministrativeByChoice] = useState('西咸');
    const {xian, community, weekIncrease} = useMappedState(mapState);

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
        let datasSring = data[0].datasSring;
        data.forEach(element => {
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

            <WeekIncrease administrative={administrative} weekIncrease={weekIncrease} log={true} />
        </div>
    );
}
