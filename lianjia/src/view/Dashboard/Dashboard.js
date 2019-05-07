import React, { Component } from 'react';
// import Province from './Province/Province';
import Blank from '../../components/Blank';
import Community from './Community/Community';
import CommunityDesignated from './Community/CommunityDesignated'; // 指定的小区数据
import CommunityDayLine from './Community/CommunityDayLine'; // 指定小区的line数据
export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }



    render() {

        return (
            <div className="xc-dashboard-body-wrapper">
                {/* <div className='xc-dashboard-top-select'><Province /></div> */}
                <div className='xc-dashboard-body-data-show'>
                    <Community />
                </div>
                <Blank />
                <div className='xc-dashboard-body-data-show'>
                    <CommunityDesignated />
                </div>
                <Blank />
                <div className='xc-dashboard-body-data-show'>
                    <CommunityDayLine />
                </div>
            </div>
        );
    }
}