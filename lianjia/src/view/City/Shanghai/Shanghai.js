import React, { Component } from 'react';
import http from '../../../http/http';
import LinearShanghai from './LinearShanghai';
import BoxPlotShanghai from './BoxPlotShanghai';
import Blank from '../../../components/Blank';


export default class Shanghai extends Component {
    constructor(props) {
        super(props);
        this.state = {
            area: []
        };
    }

    componentWillMount() {
        this.getAllData();
    }

    async getAllData() {
        /**
         * address: "呼玛二村"
            addressSupplement: "| 1室1厅 | 42.22平米 | 南 | 简装 | 无电梯"
            datasSring: "2019-4-30"
            flood: "张庙"
            floodSupplement: "高楼层(共6层)1990年建板楼  -"
            followInfo: "16人关注 / 共5次带看 / 17天以前发布"
            price: "172"
            priceSign: "单价40739元/平米"
            tag: "近地铁,必看好房,VR房源"
            time: "2019-04-30T07:55:03.680Z"
            title: "一梯两户，全明户型，满5年，看房方便"
            total: "76033"
         */
        let data = await http.getSelectCity('shanghai', '2019-4-30');
        let flood = [];
        let price = [];
        let address = [];
        let area = [];
        data.data.forEach(element => {
            price.push(element.price);
            address.push(element.address);
            let areaSign = element.addressSupplement.replace('平米', '').split('|');
            areaSign.forEach(item => {
                if (Number(item.trim())) {
                    area.push(Number(item.trim()));
                }
            });
            flood.push(element.flood);
        });
        flood = [... new Set(flood)];
        address = [... new Set(address)];
        // console.log(area.sort((a, b) => a - b));
        // console.log(eval(area.join("+")));
        // console.log(eval(price.join("+")));
        // console.log(address);
        this.setState({ area: area });

    }

    render() {
        return (
            <div className="xc-body-main-wrapper">
                <LinearShanghai area={this.state.area} />
                <Blank />
                <BoxPlotShanghai area={this.state.area} />
            </div>
        );
    }
}