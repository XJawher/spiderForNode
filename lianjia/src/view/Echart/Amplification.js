import React from 'react';
import UIOLineChart from '../../components/UIOLineChart/UIOLineChart';

export default function DashAmplification (props){
    return (
        <div className='io-dash-chart io-dash-amplification'>
            <header>DashAmplification</header>
            <UIOLineChart option={props.option} />
        </div>
    );
}
