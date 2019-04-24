import React, { Component } from 'react';
import Province from './Province/Province';
import Community from './Community/Community';
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
                <div className='xc-dashboard-body-data-show'>
                    <Community />
                </div>
            </div>
        );
    }
}