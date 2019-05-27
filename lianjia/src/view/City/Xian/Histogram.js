import React, { } from 'react';
import { useMappedState } from "redux-react-hook";
import { Button, Input } from 'antd';
import http from '../../../http/http';
const mapState = (state) => {
    return ({
        xian: state.main.xian,
        community: state.main.community,
    });
};

/**
 * 查两次的数据:
 * 分开查询,第一次和第二次的数据
 *
 */

export default function Histogram(props) {

    const { xian, community } = useMappedState(mapState);
    if (xian.length === 111) {
        http.getCityByCondition();
    }
    // useEffect(() => {
    //     console.log(xian);
    // }, [xian]);
    // display: flex;
    // justify-content: space-between;
    return (
        <div className="xc-histogram-dash">
            {community.map(item => <span key={item.administrativeCH}><Button value={item.administrativeCH}> {item.administrative}</Button></span>)}
            <span>输入日期:<Input style={{ width: 250 }} /></span>
            <span><Button type='primary'>查询</Button></span>
        </div>
    );
}
