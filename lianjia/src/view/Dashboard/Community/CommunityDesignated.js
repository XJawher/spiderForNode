import React, {Component} from 'react';
import {Button, Input, Table} from 'antd';
import http from '../../../http/http';
export default class CommunityDesignated extends Component {
    constructor (props){
        super(props);
        this.state = {
            name: '',
            date: '2019-4-21',
            community: [],// 筛选全部小区
            administrative: [],// 行政区划数据
            allData: [],// 行政区划数据
            pageChangeLoading: false,// 分页动画
            current: 1,
        };
    }

    setData (parma, value){
        let state = Object.assign({}, {[parma]: value});
        this.setState(state);
    }

    async search (){
        let data = await http.getCityByCondition(this.state.name, this.state.date);
        console.log(this.state);
        console.log(data);
        if (data.code === 0) {
            // administrative
            this.setState({administrative: data.data});
        }
    }

    pageChange (pagination){
        this.setState({pageChangeLoading: true});
        this.setState({pageChangeLoading: false, current: pagination});
    }

    /**
     * this page is for search designated community,
     * input date {eg:2019-04-13}
     * input name {eg:'新河湾'}
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
    render (){
        let tableProps = {
            dataSource: this.state.administrative,
            rowKey: '_id',
            pagination: {
                total: this.state.administrative.length,
                pageSize: 20,
                current: this.state.current,
                showQuickJumper: true,
                onChange: this.pageChange.bind(this),
                loading: this.state.pageChangeLoading,
            },
            columns: [
                {
                    title: '小区', dataIndex: 'address', width: 100,
                },

                {
                    title: '日期', dataIndex: 'datasSring', width: 100,
                },
                {
                    title: '行政区域', dataIndex: 'flood', width: 100,
                },
                {
                    title: '楼层', dataIndex: 'floodSupplement'
                },
                {
                    title: '价格/单价', dataIndex: 'price',
                    render: (text, record) => `${text}万/${record.priceSign}`
                },
                {
                    title: '描述', dataIndex: 'addressSupplement',
                    render: (text, record) => `${text.replace(/\|/g, ' ')} ${record.title}`
                },
            ],
        };
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
                    <Table  {...tableProps} />
                </div>
            </div>
        );
    }
}