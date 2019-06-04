// DashDeduplication
import React from 'react';
import UIOLineChart from '../../components/UIOLineChart/UIOLineChart';
export default function DashDeduplication (props){
    return (
        <div className='io-dash-chart io-dash-deduplication'>
            <header>DashDeduplication</header>
            <UIOLineChart option={props.option} />
        </div>
    );
}
