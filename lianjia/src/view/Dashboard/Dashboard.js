import React, { Component } from 'react';
import Province from './Province/Province';
import { Button } from 'antd';
import http from '../../http/http';
export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    async  getAllData() {
        let { data } = await http.updateTime();
        // let modifyData = [];
        // data.data.forEach(element => {
        //     if (/'2019-04-21'/.test(element.time)) {
        //         modifyData.push({ _id: element._id, time: '2019-4-21' });
        //     } else {
        //         modifyData.push({ _id: element._id, time: '2019-4-22' });
        //     }
        // });
        // let res = await http.updateSetTime(modifyData);
        console.log(data);
    }

    render() {
        return (
            <div className="xc-dashboard-body-wrapper">
                <div className='xc-dashboard-top-select'><Province /></div>
                <div className='xc-dashboard-body-data-show'>this is Country or Provice data show part</div>
                <Button onClick={this.getAllData.bind(this)}>all data</Button>
            </div>
        );
    }
}