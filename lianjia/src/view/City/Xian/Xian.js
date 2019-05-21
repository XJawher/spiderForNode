import React, { Component } from 'react';
import http from '../../../http/http';
import { Input, Button } from 'antd';
import LineChart from '../../../components/LineChart/LineChart';
import Blank from '../../../components/Blank';
import { Counter, Number } from './hook';

export default class Xian extends Component {
    constructor(props) {
        super(props);
        this.state = {
            xianRegion: {
                xixian: [],
                gaoling: [],
                gaoxin: [],
                changan: [],
                qujiang: [],
                chanba: [],
                chengxi: [],
                data: [],
                chengbei: [],
                chengnan: [],
                chengdong: [],
                chengnei: [],
                jingkai: [],
            },
            community: [],
            coordinate: '2019-4-23',// 坐标日期
            contrast: '2019-5-7',// 对比日期
            allRegion: []
        };
    }

    componentWillMount() {
        // !this.state.community.length && this.getAllData();
    }
    /**
     * address: "华润二十四城"
    addressSupplement: "| 2室2厅 | 74.6平米 | 西南 | 精装"
    flood: "西咸"
    floodSupplement: "高楼层(共33层)板塔结合  -"
    followInfo: "4人关注 / 共10次带看 / 4天以前发布"
    price: "104"
    priceSign: "单价13942元/平米"
    tag: "近地铁,必看好房"
    time: "2019-04-21T05:34:20.900Z"
    title: "华润二十四城 两室精装 满三满二拎包入住"
    total: "34625"
     */
    async getAllData(date) {
        let { data } = await http.xianNewTotal('2019-5-7');
        let allMoney = 0;
        let xixian = [];
        let gaoling = [];
        let gaoxin = [];
        let changan = [];
        let qujiang = [];
        let chanba = [];
        let chengxi = [];
        let allRegion = [];
        let chengnan = [];
        let chengbei = [];
        let chengdong = [];
        let jingkai = [];
        let chengnei = [];
        // "西咸" "浐灞" "长安" "高新" "城南" "曲江" "城西" "城北" "城内" "城东" "经开" "高陵
        data.forEach(element => {
            allMoney = allMoney + Number(element.price);
            allRegion.push(element.flood);
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
        this.setState({
            xianRegion: {
                jingkai,
                xixian,
                gaoling,
                gaoxin,
                changan,
                qujiang,
                chanba,
                chengxi,
                data,
                chengbei,
                chengdong,
                chengnan,
                chengnei,
            }, allRegion: [...new Set(allRegion)], allMoney: allMoney.toFixed(2)
        });

    }

    formatter(parmas) {
        // return `${parmas.name}: ${parmas.data.value} ${parmas.percent}%`; {b|{b}：}{c}  {per|{d}%}
        return ` ${parmas.name}: ${parmas.value} {per|${parmas.percent}%} 均价{per|${parmas.percent}%}`;
    }

    /**
     *
     * @param {* contrast or coordinate } parmas
     * @param {*} value
     */
    setData(parmas, value) {
        this.setState({ [parmas]: value });
    }

    search() {
        console.log(this.state);
    }
    render() {
        let { xianRegion } = this.state;
        let option = {
            title: {
                text: '某站点用户访问来源',
            },
            tooltip: {
                trigger: 'item',
                formatter: "{b}: {c} ({d}%)"
            },
            legend: {
                data: this.state.allRegion
            },
            series: [
                {
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    label: {
                        normal: {
                            formatter: this.formatter.bind(this),
                            backgroundColor: '#eee',
                            borderColor: '#aaa',
                            borderWidth: 1,
                            borderRadius: 4,
                            // shadowBlur:3,
                            // shadowOffsetX: 2,
                            // shadowOffsetY: 2,
                            // shadowColor: '#999',
                            // padding: [0, 7],
                            rich: {
                                // a: {
                                //     color: '#999',
                                //     lineHeight: 22,
                                //     align: 'center'
                                // },
                                // abg: {
                                //     backgroundColor: '#333',
                                //     width: '100%',
                                //     align: 'right',
                                //     height: 22,
                                //     borderRadius: [4, 4, 0, 0]
                                // },
                                hr: {
                                    borderColor: '#aaa',
                                    width: '100%',
                                    borderWidth: 0.5,
                                    height: 0
                                },
                                b: {
                                    fontSize: 16,
                                    lineHeight: 33
                                },
                                per: {
                                    color: '#eee',
                                    backgroundColor: '#334455',
                                    padding: [2, 4],
                                    borderRadius: 2
                                }
                            }
                        }
                    }, // "西咸" "浐灞" "长安" "高新" "城南" "曲江" "城西" "城北" "城内" "城东" "经开" "高陵
                    // xianRegion: {
                    //     jingkai,
                    //     xixian,
                    //     gaoling,
                    //     gaoxin,
                    //     changan,
                    //     qujiang,
                    //     chengxi,
                    //     data,
                    //     chengbei,
                    //     chengdong,
                    //     chengnan,
                    //     chengnei,
                    // }
                    data: xianRegion.jingkai.length ? [
                        { value: xianRegion.xixian.length, name: '西咸' },
                        { value: xianRegion.chanba.length, name: '浐灞' },
                        { value: xianRegion.changan.length, name: '长安' },
                        { value: xianRegion.gaoxin.length, name: '高新' },
                        { value: xianRegion.chengnan.length, name: '城南' },
                        { value: xianRegion.qujiang.length, name: '曲江' },
                        { value: xianRegion.chengxi.length, name: '城西' },
                        { value: xianRegion.chengbei.length, name: '城北' },
                        { value: xianRegion.chengnei.length, name: '城内' },
                        { value: xianRegion.chengdong.length, name: '城东' },
                        { value: xianRegion.jingkai.length, name: '经开' },
                        { value: xianRegion.gaoling.length, name: '高陵' }
                    ] : []
                }
            ]
        };
        return (
            <div className="xc-body-main-wrapper">
                <div className='xc-community-designated'>
                    <div className='xc-community-designated-search'>
                        <span style={{ width: 200 }}>Coordinate :</span> <Input
                            size="small"
                            className='xc-community-designated-input'
                            placeholder={'坐标日期'}
                            value={this.state.coordinate}
                            onChange={({ target: { value } }) => {
                                this.setData.bind(this, 'coordinate')(value);
                            }}
                        />

                        <span style={{ width: 200 }}>Contrast:</span> <Input
                            size="small"
                            className='xc-community-designated-input'
                            value={this.state.contrast}
                            placeholder={'对比日期'}
                            onChange={({ target: { value } }) => {
                                this.setData.bind(this, 'contrast')(value);
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
                </div>
                <LineChart option={option} />
                <Blank />
                <LineChart option={option} />
                <Blank />
                <div>
                    <Counter />
                    <Number />
                </div>
            </div>
        );
    }
}