import React, { Component } from 'react';
import { Button, Input } from 'antd';
import http from '../../../http/http';
import DaysLine from "./DaysLine";
export default class CommunityDayLine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '白桦林居小区',
            community: [],// 行政区划数据
        };
    }

    setData(parma, value) {
        let state = Object.assign({}, { [parma]: value });
        this.setState(state);
    }

    async search() {
        let data = await http.getCityByCondition(this.state.name);
        if (data.code === 0) {
            this.setState({ community: data.data });
        }
    }

    /**
     * this page is for search designated community,
     * input date {eg:2019-04-13}
     * input name {eg:'新河湾'}
     * add numbers in the search community EG:4-21 the community has 20's house,and alert this number in
     *
     *
     * address: "唐品A"
        addressSupplement: "| 3室2厅 | 122.97平米 | 南 北 | 简装"
        datasSring: "2019-4-21"
        flood: "高陵"
        floodSupplement: "低楼层(共18层)暂无数据  -"
        followInfo: "24人关注 / 共0次带看 / 5个月以前发布"
        price: "73"
        priceSign: "单价5937元/平米"
        tag: "房本满五年"
        time: "2019-04-21T05:34:21.684Z"
        title: "高陵 满五满二无增值税 户型刚正"
        total: "34625"
     *
     */
    render() {
        return (
            <div className='xc-community-designated'>
                <div className='xc-community-designated-search'>
                    <span style={{ width: 200 }}>小区名字:</span> <Input
                        size="small"
                        className='xc-community-designated-input'
                        placeholder={'小区名称'}
                        value={this.state.name}
                        onChange={({ target: { value } }) => {
                            this.setData.bind(this, 'name')(value);
                        }}
                    />

                    <span style={{ width: 200 }}>输入日期:</span> <Input
                        size="small"
                        className='xc-community-designated-input'
                        value={this.state.date}
                        placeholder={'输入日期'}
                        disabled
                        onChange={({ target: { value } }) => {
                            this.setData.bind(this, 'date')(value);
                        }}
                    />

                    <Button
                        className="xc-community-designated-input"
                        type="primary"
                        size="small"
                        onClick={this.search.bind(this)}
                    >
                        {'查询'}
                    </Button>
                </div>

                <div className='xc-common-list'>
                    <DaysLine community={this.state.community} />
                </div>
            </div>
        );
    }
}