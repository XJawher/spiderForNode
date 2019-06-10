/* eslint-disable camelcase */
import React, {Component} from 'react';
import {Table} from 'antd';
import http from '../../../http/http';

export default class Community extends Component {
    constructor (props){
        super(props);
        this.state = {
            community: [],// 筛选全部小区
            administrative: [],// 行政区划数据
            allData: [],// 行政区划数据
            pageChangeLoading: false,// 分页动画
            current: 1, // 当前页,可以通过修改参数的值来改变页数
        };
    }

    /**
     * 现在的想法是删除数据中的 time 还有 datasSring 字段,
     * address: "华润二十四城"
    addressSupplement: "| 2室2厅 | 74.6平米 | 西南 | 精装"
    flood: "西咸"
    floodSupplement: "高楼层(共33层)板塔结合  -"
    followInfo: "4人关注 / 共10次带看 / 4天以前发布"
    price: "104"
    priceSign: "单价13942元/平米"
    tag: "近地铁,必看好房"
    title: "华润二十四城 两室精装 满三满二拎包入住"
    total: "34625"
     */

    componentDidMount (){
        // !this.state.community.length && this.getAllData();
    }

    time (text, record){
        return text;
    }

    pageChange (pagination){
        this.setState({pageChangeLoading: true});
        this.setState({pageChangeLoading: false, current: pagination});
    }

    async  getAllData (){
        let myDate = new Date();
        let fullYear = myDate.toLocaleDateString();
        fullYear.replace(/\//g, '-');
        // let data4_23 = null;
        // let data5_3 = null;
        let {data: data4_23} = await http.updateTime('2019-4-23');
        let {data: data5_3} = await http.updateTime('2019-5-8');
        let community = [];
        let flood = [];
        let price = [];
        let area = [];
        data4_23.data.push(...data5_3.data);
        data4_23.data.forEach(element => {
            price.push(element.price);
            let areaSign = element.addressSupplement.replace('平米', '').split('|');
            areaSign.forEach(item => {
                if (Number(item.trim())) {
                    area.push(Number(item.trim()));
                }
            });
            flood.push(element.flood);
        });
        flood = [... new Set(flood)];
        data4_23.data.forEach(element => {
            community.push(element.address);
        });
        let administrativeData = await this.setAdministrativeDate([... new Set(community)], data4_23.data);
        await this.setState({community: [... new Set(community)], allData: data4_23, administrative: administrativeData});
    }

    // 设置行政区划的数据
    async setAdministrativeDate (community, data){
        /**
         * administrative : [{administrative:'西咸',datasSring:datasSring,community:community.join(',')}]
         */
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
        data.forEach(element => {
            if (element.datasSring === '2019-4-23') {  // 首先获取 4-23 的全部数据,然后再用 community 进行拆分
                switch (element.flood) {
                    case '西咸':
                        xixian.push(element.address);
                        break;
                    case '曲江':
                        qujiang.push(element.address);
                        break;
                    case '高陵':
                        gaoling.push(element.address);
                        break;
                    case '长安':
                        changan.push(element.address);
                        break;
                    case '浐灞':
                        chanba.push(element.address);
                        break;
                    case '城西':
                        chengxi.push(element.address);
                        break;
                    case '高新':
                        gaoxin.push(element.address);
                        break;
                    case '城南':
                        chengnan.push(element.address);
                        break;
                    case '城北':
                        chengbei.push(element.address);
                        break;
                    case '城东':
                        chengdong.push(element.address);
                        break;
                    case '经开':
                        jingkai.push(element.address);
                        break;
                    case '城内':
                        chengnei.push(element.address);
                        break;

                    default:
                        break;
                }
            }
        });

        return [
            {administrativeCH: 'xixian', administrative: '西咸', datasSring: '2019-4-23', community: [... new Set(xixian)]},
            {administrativeCH: 'qujiang', administrative: '曲江', datasSring: '2019-4-23', community: [... new Set(qujiang)]},
            {administrativeCH: 'gaoling', administrative: '高陵', datasSring: '2019-4-23', community: [... new Set(gaoling)]},
            {administrativeCH: 'changan', administrative: '长安', datasSring: '2019-4-23', community: [... new Set(changan)]},
            {administrativeCH: 'chanba', administrative: '浐灞', datasSring: '2019-4-23', community: [... new Set(chanba)]},
            {administrativeCH: 'chengxi', administrative: '城西', datasSring: '2019-4-23', community: [... new Set(chengxi)]},
            {administrativeCH: 'gaoxin', administrative: '高新', datasSring: '2019-4-23', community: [... new Set(gaoxin)]},
            {administrativeCH: 'chengnan', administrative: '城南', datasSring: '2019-4-23', community: [... new Set(chengnan)]},
            {administrativeCH: 'chengdong', administrative: '城北', datasSring: '2019-4-23', community: [... new Set(chengdong)]},
            {administrativeCH: 'chengbei', administrative: '城东', datasSring: '2019-4-23', community: [... new Set(chengbei)]},
            {administrativeCH: 'jingkai', administrative: '经开', datasSring: '2019-4-23', community: [... new Set(jingkai)]},
            {administrativeCH: 'chengnei', administrative: '城内', datasSring: '2019-4-23', community: [... new Set(chengnei)]},
        ];
    }

    render (){
        let tableProps = {
            dataSource: this.state.administrative,
            rowKey: 'administrative',
            pagination: {
                total: this.state.administrative.length,
                pageSize: 3,
                current: this.state.current,
                showQuickJumper: true,
                onChange: this.pageChange.bind(this),
                loading: this.state.pageChangeLoading,
            },
            columns: [
                {
                    title: '行政区划', dataIndex: 'administrative', width: 100,
                    render: (text, record) => `${text}(${record.community.length})`
                },

                {
                    title: '创建时间', dataIndex: 'datasSring', width: 100,
                    render: this.time.bind(this)
                },
                {
                    title: '小区列表', dataIndex: 'community',
                    render: text => text.join(',')
                },
            ],
        };
        return (
            <div>
                <div className='xc-common-list'>
                    <header>行政区划数据分布</header>
                    <Table  {...tableProps} />
                </div>
                <div>{}</div>
            </div>
        );
    }
}