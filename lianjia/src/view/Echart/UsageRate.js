import React from 'react';
import UIOPieChart from '../../components/UIOLineChart/UIOPieChart';
export default function DashUsageRate (props){
    let lang = (cn, en) => cn;
    return (
        <div className='io-dash-chart io-dash-usage-rate'>
            <header>{lang('存储使用率', 'Cluster Basic Information')}</header>
            <div className='usage-rate-content'>
                <div className='chart-part'>
                    <UIOPieChart option={props.option} />
                </div>
                <div className='content-part'>
                    <div>
                        <span className='block-color'></span>
                        <span>总容量:</span>
                        <span>{'10TB'}</span>
                    </div>
                    <div>
                        <span></span>
                        <span>块存储:</span>
                        <span>3TB</span>
                    </div>
                    <div>
                        <span></span>
                        <span>对象存储:</span>
                        <span>1.2TB</span>
                    </div>
                    <div>
                        <span></span>
                        <span>文件存储</span>
                        <span>1TB</span>
                    </div>
                    <div>
                        <span></span>
                        <span>可用容量</span>
                        <span>5TB</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
