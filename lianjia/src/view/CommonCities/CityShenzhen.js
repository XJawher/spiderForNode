import React, {useEffect, useState} from 'react';
import {Button} from 'antd';
import {useMappedState} from "redux-react-hook";
import WeekIncrease from '../../components/DataFiltering/WeekIncrease';
import {outliers, insertData} from '../../components/DataFiltering/DataFiltering';
import {diffValueOfPrice} from '../../components/utils/index';

const mapState = (state) => {
    return ({
        shenzhen: state.main.shenzhen,
        weekIncreaseShenzhen: state.main.weekIncreaseShenzhen,
    });
};

export default function CityShenzhen(props) {

    const [administrative, setAdministrativeByChoice] = useState('东门');
    const {shenzhen, weekIncreaseShenzhen} = useMappedState(mapState);

    const [pureFlood, setPureFlood] = useState([
        {administrative: '东门', data: []},
        {administrative: '春风路', data: []},
        {administrative: '笋岗', data: []},
        {administrative: '黄贝岭', data: []},
        {administrative: '螺岭', data: []},
        {administrative: '莲塘', data: []},
        {administrative: '布心', data: []},
        {administrative: '万象城', data: []},
        {administrative: '地王', data: []},
        {administrative: '百仕达', data: []},
        {administrative: '翠竹', data: []},
        {administrative: '清水河', data: []},
        {administrative: '百花', data: []},
        {administrative: '石厦', data: []},
        {administrative: '上下沙', data: []},
        {administrative: '香梅北', data: []},
        {administrative: '梅林', data: []},
        {administrative: '新洲', data: []},
        {administrative: '沙尾', data: []},
        {administrative: '香蜜湖', data: []},
        {administrative: '景田', data: []},
        {administrative: '皇岗', data: []},
        {administrative: '竹子林', data: []},
        {administrative: '福田中心', data: []},
        {administrative: '车公庙', data: []},
        {administrative: '盐田港', data: []},
        {administrative: '梅沙', data: []},
        {administrative: '龙岗中心城', data: []},
        {administrative: '布吉大芬', data: []},
        {administrative: '布吉街', data: []},
        {administrative: '布吉关', data: []},
        {administrative: '大运新城', data: []},
        {administrative: '坂田', data: []},
        {administrative: '龙岗宝荷', data: []},
        {administrative: '布吉南岭', data: []},
        {administrative: '龙岗双龙', data: []},
        {administrative: '华侨城', data: []},
        {administrative: '南头', data: []},
        {administrative: '蛇口', data: []},
        {administrative: '南山中心', data: []},
        {administrative: '前海', data: []},
        {administrative: '后海', data: []},
        {administrative: '白石洲', data: []},
        {administrative: '科技园', data: []},
        {administrative: '大学城', data: []},
        {administrative: '西丽', data: []},
        {administrative: '平湖', data: []},
        {administrative: '丹竹头', data: []},
        {administrative: '布吉石芽岭', data: []},
        {administrative: '横岗', data: []},
        {administrative: '坪山', data: []},
        {administrative: '碧海', data: []},
        {administrative: '西乡', data: []},
        {administrative: '宝安中心', data: []},
        {administrative: '桃源居', data: []},
        {administrative: '新安', data: []},
        {administrative: '翻身', data: []},
        {administrative: '深圳湾', data: []},
        {administrative: '红树湾', data: []},
        {administrative: '梅林关', data: []},
        {administrative: '龙华中心', data: []},
        {administrative: '观澜', data: []},
        {administrative: '龙华新区', data: []},
        {administrative: '红山', data: []},
        {administrative: '上塘', data: []},
        {administrative: '莲花', data: []},
        {administrative: '赤尾', data: []},
        {administrative: '福田保税区', data: []},
        {administrative: '松岗', data: []},
        {administrative: '福永', data: []},
        {administrative: '沙井', data: []},
        {administrative: '华强南', data: []},
        {administrative: '上步', data: []},
        {administrative: '八卦岭', data: []},
        {administrative: '未知商圈', data: []},
        {administrative: '华强北', data: []},
        {administrative: '大鹏半岛', data: []},
        {administrative: '园岭', data: []},
        {administrative: '石岩', data: []},
        {administrative: '黄木岗', data: []},
        {administrative: '公明', data: []},
    ]);

    useEffect(() => {
        let data = [];
        let date = '';
        //do not delete those commit
        if (shenzhen.data && shenzhen.data.length) {
            let splitData = setAdministrative(shenzhen.data);
            const allPrice = [];
            splitData.forEach(item => {
                if (item.data.length) {
                    let {area, price, priceSign, datasSring, administrative} = insertData(item);
                    date = datasSring;
                    allPrice.push(...price);
                    data.push(outliers(area, price, priceSign, datasSring, administrative));
                }
            });
            // console.log(allPrice);
            // console.log(allPrice.reduce((pre, cur) => pre === 0 ? cur : pre + cur, 0));
            console.log(JSON.stringify({[date]: data}));
        }
    }, [shenzhen]);

    // 设置行政区划的数据
    const setAdministrative = (data) => {
        // "东门","春风路","笋岗","黄贝岭","螺岭","莲塘","布心","万象城","罗湖口岸","地王","百仕达",
        // "新秀","银湖","翠竹","洪湖","清水河","百花","石厦","上下沙","香梅北","梅林","新洲","沙尾","香蜜湖",
        // "景田","皇岗","竹子林","福田中心","车公庙","盐田港","沙头角","梅沙","龙岗中心城","布吉大芬","布吉街",
        // "布吉关","大运新城","布吉水径","坂田","龙岗宝荷","布吉南岭","龙岗双龙","华侨城","南头","蛇口","南山中心",
        // "前海","后海","白石洲","科技园","大学城","西丽","平湖","丹竹头","布吉石芽岭","横岗","坪地","坪山","碧海",
        // "西乡","宝安中心","桃源居","新安","曦城","翻身","深圳湾","红树湾","梅林关","龙华中心","观澜","民治","龙华新区",
        // "红山","上塘","莲花","赤尾","福田保税区","松岗","福永","沙井","华强南","八卦岭","上步","未知商圈","华强北",
        // "大鹏半岛","园岭","石岩","黄木岗","公明"
        let datasSring = data[0].datasSring;
        let pureFlood = [
            {administrative: '东门', datasSring: datasSring, data: []},
            {administrative: '春风路', datasSring: datasSring, data: []},
            {administrative: '笋岗', datasSring: datasSring, data: []},
            {administrative: '黄贝岭', datasSring: datasSring, data: []},
            {administrative: '螺岭', datasSring: datasSring, data: []},
            {administrative: '莲塘', datasSring: datasSring, data: []},
            {administrative: '布心', datasSring: datasSring, data: []},
            {administrative: '万象城', datasSring: datasSring, data: []},
            {administrative: '地王', datasSring: datasSring, data: []},
            {administrative: '百仕达', datasSring: datasSring, data: []},
            {administrative: '翠竹', datasSring: datasSring, data: []},
            {administrative: '清水河', datasSring: datasSring, data: []},
            {administrative: '百花', datasSring: datasSring, data: []},
            {administrative: '石厦', datasSring: datasSring, data: []},
            {administrative: '上下沙', datasSring: datasSring, data: []},
            {administrative: '香梅北', datasSring: datasSring, data: []},
            {administrative: '梅林', datasSring: datasSring, data: []},
            {administrative: '新洲', datasSring: datasSring, data: []},
            {administrative: '沙尾', datasSring: datasSring, data: []},
            {administrative: '香蜜湖', datasSring: datasSring, data: []},
            {administrative: '景田', datasSring: datasSring, data: []},
            {administrative: '皇岗', datasSring: datasSring, data: []},
            {administrative: '竹子林', datasSring: datasSring, data: []},
            {administrative: '福田中心', datasSring: datasSring, data: []},
            {administrative: '车公庙', datasSring: datasSring, data: []},
            {administrative: '盐田港', datasSring: datasSring, data: []},
            {administrative: '梅沙', datasSring: datasSring, data: []},
            {administrative: '龙岗中心城', datasSring: datasSring, data: []},
            {administrative: '布吉大芬', datasSring: datasSring, data: []},
            {administrative: '布吉街', datasSring: datasSring, data: []},
            {administrative: '布吉关', datasSring: datasSring, data: []},
            {administrative: '大运新城', datasSring: datasSring, data: []},
            {administrative: '坂田', datasSring: datasSring, data: []},
            {administrative: '龙岗宝荷', datasSring: datasSring, data: []},
            {administrative: '布吉南岭', datasSring: datasSring, data: []},
            {administrative: '龙岗双龙', datasSring: datasSring, data: []},
            {administrative: '华侨城', datasSring: datasSring, data: []},
            {administrative: '南头', datasSring: datasSring, data: []},
            {administrative: '蛇口', datasSring: datasSring, data: []},
            {administrative: '南山中心', datasSring: datasSring, data: []},
            {administrative: '前海', datasSring: datasSring, data: []},
            {administrative: '后海', datasSring: datasSring, data: []},
            {administrative: '白石洲', datasSring: datasSring, data: []},
            {administrative: '科技园', datasSring: datasSring, data: []},
            {administrative: '大学城', datasSring: datasSring, data: []},
            {administrative: '西丽', datasSring: datasSring, data: []},
            {administrative: '平湖', datasSring: datasSring, data: []},
            {administrative: '丹竹头', datasSring: datasSring, data: []},
            {administrative: '布吉石芽岭', datasSring: datasSring, data: []},
            {administrative: '横岗', datasSring: datasSring, data: []},
            {administrative: '坪山', datasSring: datasSring, data: []},
            {administrative: '碧海', datasSring: datasSring, data: []},
            {administrative: '西乡', datasSring: datasSring, data: []},
            {administrative: '宝安中心', datasSring: datasSring, data: []},
            {administrative: '桃源居', datasSring: datasSring, data: []},
            {administrative: '新安', datasSring: datasSring, data: []},
            {administrative: '翻身', datasSring: datasSring, data: []},
            {administrative: '深圳湾', datasSring: datasSring, data: []},
            {administrative: '红树湾', datasSring: datasSring, data: []},
            {administrative: '梅林关', datasSring: datasSring, data: []},
            {administrative: '龙华中心', datasSring: datasSring, data: []},
            {administrative: '观澜', datasSring: datasSring, data: []},
            {administrative: '龙华新区', datasSring: datasSring, data: []},
            {administrative: '红山', datasSring: datasSring, data: []},
            {administrative: '上塘', datasSring: datasSring, data: []},
            {administrative: '莲花', datasSring: datasSring, data: []},
            {administrative: '赤尾', datasSring: datasSring, data: []},
            {administrative: '福田保税区', datasSring: datasSring, data: []},
            {administrative: '松岗', datasSring: datasSring, data: []},
            {administrative: '福永', datasSring: datasSring, data: []},
            {administrative: '沙井', datasSring: datasSring, data: []},
            {administrative: '华强南', datasSring: datasSring, data: []},
            {administrative: '上步', datasSring: datasSring, data: []},
            {administrative: '八卦岭', datasSring: datasSring, data: []},
            {administrative: '未知商圈', datasSring: datasSring, data: []},
            {administrative: '华强北', datasSring: datasSring, data: []},
            {administrative: '大鹏半岛', datasSring: datasSring, data: []},
            {administrative: '园岭', datasSring: datasSring, data: []},
            {administrative: '石岩', datasSring: datasSring, data: []},
            {administrative: '黄木岗', datasSring: datasSring, data: []},
            {administrative: '公明', datasSring: datasSring, data: []},
        ];
        data.forEach(element => {
            pureFlood.forEach(item => {
                if (element.address === item.administrative) {
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
    diffValueOfPrice(weekIncreaseShenzhen);

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
            <WeekIncrease administrative={administrative} weekIncrease={weekIncreaseShenzhen} />
        </div>
    );
}

