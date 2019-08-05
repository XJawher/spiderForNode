import React, {useEffect, useState} from 'react';
import {Button} from 'antd';
import {useMappedState} from "redux-react-hook";
import WeekIncrease from '../../components/DataFiltering/WeekIncrease';
import {outliers, insertData} from '../../components/DataFiltering/DataFiltering';
const mapState = (state) => {
    return ({
        shanghai: state.main.shanghai,
        // weekIncreaseShanghai: state.main.weekIncreaseShanghai,
        weekIncreaseShanghai: state.main.weekIncreaseShenzhen,
    });
};

export default function CityShangHai(props) {
    const [administrative, setAdministrativeByChoice] = useState('');
    const {shanghai, weekIncreaseShanghai} = useMappedState(mapState);


    const [pureFlood, setPureFlood] = useState([
        {administrative: '', data: []},
    ]);

    useEffect(() => {
        let data = [];
        let date = '';
        //do not delete those commit
        if (shanghai.data && shanghai.data.length) {
            let splitData = setAdministrative(shanghai.data);
            splitData.forEach(item => {
                if (item.data.length) {
                    let {area, price, priceSign, datasSring, administrative} = insertData(item);
                    date = datasSring;
                    data.push(outliers(area, price, priceSign, datasSring, administrative));
                }
            });
            console.log(JSON.stringify({[date]: data}));
        }
    }, [shanghai.data]);
    // set administrative data for shanghai components
    const setAdministrative = (data) => {
        let datasSring = data[0].datasSring;
        let pureFlood = [
            {administrative: '', datasSring: datasSring, data: []},
        ];
        let flood = [];
        data.forEach(element => {
            flood.push(element.flood);
            pureFlood.forEach(item => {
                if (element.flood === item.administrative) {
                    item.data.push(element);
                }
            });
        });
        console.log([...new Set(flood)]);

        setPureFlood(pureFlood);
        return pureFlood;
    };

    let choseAdministrative = (administrative) => {
        setAdministrativeByChoice(administrative);
    };

    // const shallowCopy = () => {

    // };

    return (
        <div className="xc-histogram-dash">
            <div className='xc-histogram-dash-shanghai'>
                {pureFlood.map(item => <span key={item.administrative}><Button type={administrative === item.administrative ? 'primary' : ''} onClick={() => choseAdministrative(item.administrative)}> {item.administrative}</Button></span>)}
            </div>
            <WeekIncrease administrative={administrative} weekIncrease={weekIncreaseShanghai} />
        </div>
    );
}
