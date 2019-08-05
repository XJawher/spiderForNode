import React, {useState} from 'react';
import {Button} from 'antd';
import {useMappedState} from "redux-react-hook";
import http from '../../http/http';
import CityShenzhen from './CityShenzhen';
import CityShangHai from './CityShangHai';
import CityXian from './CityXian';

const mapState = (state) => {
    return ({
        xian: state.main.xian,
        shanghai: state.main.shanghai,
        shenzhen: state.main.shenzhen,
        weekIncreaseShangHai: state.main.weekIncreaseShangHai,
        weekIncreaseShenZhen: state.main.weekIncreaseShenZhen,
    });
};

export default function CommonCities() {

    const [selectCity, setSelectCity] = useState('shenzhen');
    const {xian, shanghai, shenzhen, weekIncreaseShangHai, weekIncreaseShenZhen} = useMappedState(mapState);
    const [loading, setLoading] = useState(false);
    // console.log({xian, shanghai, shenzhen});


    /*
     * @param {选择城市,然后在控制台中加载该城市的数据} city
     */

    const onSelectCityClick = async (city) => {
        setSelectCity(city);
        await setLoading(true);
        /**
         * 2019-7-19,2019-7-25,2019-8-4
         */
        await http.getSelectCityData(city, {datasSring: '2019-8-4'});
        setLoading(false);
    };

    return (
        <div className="xc-body-main-wrapper height-100">
            <header className='xc-common-city-header'>
                <Button loading={loading} onClick={onSelectCityClick.bind(null, 'shenzhen')} type={selectCity === 'shenzhen' ? 'primary' : ''}>深圳</Button>
                <Button loading={loading} onClick={onSelectCityClick.bind(null, 'shanghai')} type={selectCity === 'shanghai' ? 'primary' : ''}>上海</Button>
                <Button loading={loading} onClick={onSelectCityClick.bind(null, 'xian')} type={selectCity === 'xian' ? 'primary' : ''}>西安</Button>
            </header>
            {selectCity === 'shenzhen' && <CityShenzhen weekIncrease={weekIncreaseShenZhen} data={shenzhen} />}
            {selectCity === 'shanghai' && <CityShangHai weekIncrease={weekIncreaseShangHai} data={shanghai} />}
            {selectCity === 'xian' && <CityXian weekIncrease={weekIncreaseShangHai} data={xian} />}
        </div>
    );
}
