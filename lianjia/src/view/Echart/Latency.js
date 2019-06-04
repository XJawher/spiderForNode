import React from 'react';
import UIOLineChart from '../../components/UIOLineChart/UIOLineChart';
export default function DashLatency (props){
    return (
        <div className='io-dash-chart io-dash-latency'>
            <header>DashLatency</header>
            <UIOLineChart option={props.option} />
        </div>
    );
}
