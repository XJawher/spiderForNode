import React, { Component } from 'react';
import Province from './Province/Province';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className="xc-dashboard-body-wrapper">
                <div className='xc-dashboard-top-select'><Province /></div>
                <div className='xc-dashboard-body-data-show'>this is Country or Provice data show part</div>
            </div>
        );
    }
}