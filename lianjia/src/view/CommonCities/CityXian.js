import React, {useEffect, useState} from 'react';
import {Button} from 'antd';
import {useMappedState} from "redux-react-hook";
import WeekIncrease from '../../components/DataFiltering/WeekIncrease';
import {outliers, insertData} from '../../components/DataFiltering/DataFiltering';
import {diffValueOfPrice} from '../../components/utils/index';

const mapState = (state) => {
    return ({
        xian: state.main.xian,
        weekIncrease: state.main.weekIncrease,
    });
};

export default function Cityxian(props) {

    const [administrative, setAdministrativeByChoice] = useState('曲江');
    const {xian, weekIncrease} = useMappedState(mapState);
    const [pureFlood, setPureFlood] = useState([
        {administrative: '曲江', data: []},
        {administrative: '浐灞', data: []},
        {administrative: '长安', data: []},
        {administrative: '城东', data: []},
        {administrative: '城北', data: []},
        {administrative: '经开', data: []},
        {administrative: '高新', data: []},
        {administrative: '城西', data: []},
        {administrative: '城南', data: []},
        {administrative: '高陵', data: []},
        {administrative: '西咸', data: []},
        {administrative: '城内', data: []},
    ]);

    useEffect(() => {
        let data = [];
        let date = '';
        //do not delete those commit
        if (xian.data && xian.data.length) {
            let splitData = setAdministrative(xian.data);
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
        let datasSring = data[0].datasSring;
        let pureFlood = [
            {administrative: '曲江', datasSring: datasSring, data: []},
            {administrative: '浐灞', datasSring: datasSring, data: []},
            {administrative: '长安', datasSring: datasSring, data: []},
            {administrative: '城东', datasSring: datasSring, data: []},
            {administrative: '城北', datasSring: datasSring, data: []},
            {administrative: '经开', datasSring: datasSring, data: []},
            {administrative: '高新', datasSring: datasSring, data: []},
            {administrative: '城西', datasSring: datasSring, data: []},
            {administrative: '城南', datasSring: datasSring, data: []},
            {administrative: '高陵', datasSring: datasSring, data: []},
            {administrative: '西咸', datasSring: datasSring, data: []},
            {administrative: '城内', datasSring: datasSring, data: []},
        ];
        data.forEach(element => {
            pureFlood.forEach(item => {
                if (element.flood === item.administrative) {
                    item.data.push(element);
                }
            });
        });
        setPureFlood(pureFlood);
        return pureFlood;
    };

    let choseAdministrative = (administrative) => {
        setAdministrativeByChoice(administrative);
    };
    diffValueOfPrice(weekIncrease);

    const style = {
        height: '220px',
        width: '100%',
        padding: '10px 20px',
    };
    return (
        <div className="xc-histogram-dash">
            <div style={style}>
                {pureFlood.map(item => <span key={item.administrative}><Button type={administrative === item.administrative ? 'primary' : ''} onClick={() => choseAdministrative(item.administrative)}> {item.administrative}</Button></span>)}
            </div>
            <WeekIncrease administrative={administrative} weekIncrease={weekIncrease} />
        </div>
    );
}

