import React, {Component} from 'react';
import {Button, Input} from 'antd';
import http from '../../../http/http';
import DaysLine from "./DaysLine";
export default class CommunityDayLine extends Component {
    constructor (props){
        super(props);
        this.state = {
            name: '金叶新城',
            community: [],// 行政区划数据
        };
    }

    setData (parma, value){
        let state = Object.assign({}, {[parma]: value});
        this.setState(state);
    }

    async search (){
        let data = await http.getCityByCondition(this.state.name, '');
        if (data.code === 0) {
            this.setState({community: data.data});
        }
    }

    /**
     * this page is for search designated community,
     * input date {eg:2019-04-13}
     * input name {eg:'新河湾'}
     * add numbers in the search community EG:4-21 the community has 20's house,and alert this number in
     *
     */
    render (){
        return (
            <div className='xc-community-designated'>
                <div className='xc-community-designated-search'>
                    <span style={{width: 200}}>小区名字:</span> <Input
                        size="small"
                        className='xc-community-designated-input'
                        placeholder={'小区名称'}
                        value={this.state.name}
                        onChange={({target: {value}}) => {
                            this.setData.bind(this, 'name')(value);
                        }}
                    />

                    <span style={{width: 200}}>输入日期:</span> <Input
                        size="small"
                        className='xc-community-designated-input'
                        value={this.state.date}
                        placeholder={'输入日期'}
                        disabled
                        onChange={({target: {value}}) => {
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