import React, { Component } from 'react';
import http from '../../http/http';

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
                jingkai: [],
            },
        };
    }

    componentWillMount() {
        this.getAllData();
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
    async getAllData() {
        let { data } = await http.xianNewTotal();
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
        // 0: "西咸"
        // 1: "浐灞"
        // 2: "长安"
        // 3: "高新"
        // 4: "城南"
        // 5: "曲江"
        // 6: "城西"
        // 7: "城北"
        // 8: "城内"
        // 9: "城东"
        // 10: "经开"
        // 11: "高陵
        data.forEach(element => {
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
            }, allRegion: [... new Set(allRegion)]
        });

    }

    render() {
        console.log(this.state);
        return (
            <div className="xc-body-wrapper">
                this is xian page
            </div>
        );
    }
}