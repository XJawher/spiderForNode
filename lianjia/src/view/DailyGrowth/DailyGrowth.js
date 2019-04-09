import React, { Component } from 'react';
import http from '../../http/http';

export default class DailyGrowth extends Component {

    getCityByConditions() {
        http.getCityByCondition();
    }

    getTest() {
        http.testGet();
    }

    render() {
        return (
            <div className="xc-body-wrapper">
                this is DailyGrowth
                <div>
                    <button onClick={this.getCityByConditions.bind(this)}>data</button>
                    <button onClick={this.getTest.bind(this)}>get</button>
                </div>
            </div>
        );
    }
}