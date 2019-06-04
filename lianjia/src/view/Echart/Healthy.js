import React from 'react';

export default function DashHealthy (){

    function lang (cn, en){
        return cn;
    }


    return (
        <div className='io-dash-chart'>
            <header id='clusterThroughput'>{lang('集群吞吐量', 'Cluster Throughput')}</header>
            <div className='io-healthy-title'><span>{lang('集群健康管理', 'io Healthy Management')}</span></div>
            <div className='io-healthy-subtitle'>
                <div className='io-healthy-image' />
                <div className='io-healthy-introduce'>
                    <div className='io-healthy-introduce-message' style={{margin: 0, fontWeight: 400}}>
                        <span> <strong>{lang('集群状态 :', 'io Status')}</strong>
                        </span>
                    </div>
                    <div className='io-healthy-introduce-message'>
                        <span> <strong>节点组</strong></span>
                        <span><strong>硬盘数 </strong> </span>
                    </div>
                    <div className='io-healthy-introduce-message'>
                        <span><strong>节点数&nbsp;: </strong> </span>
                        <span><strong>监控数&nbsp;: </strong></span>
                    </div>
                </div>
            </div>
        </div>
    );
}
