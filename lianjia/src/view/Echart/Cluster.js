import React from 'react';
export default function DashCluster (){
    let lang = (cn, en) => cn;
    return (
        <div className='io-dash-cluster'>
            <div className='io-cluster-arbitration-content'>
                <div className='io-cluster-arbitration-image'>
                    <img src={require('../../images/dashboard/charge.png')} alt='solid' title='节点' style={{marginTop: -5}} />
                </div>
                <div className='io-cluster-arbitration-introduce' style={{marginLeft: 46}}>
                    <p className='arbitration'>{lang('节点', 'Hard disk management')}</p>
                    <p className='node'>{lang('节点状态', 'Number of hard disks, status monitoring')}</p>
                </div>
            </div>
            <div className='io-cluster-arbitration-content'>
                <div className='io-cluster-arbitration-image'>
                    <img src={require('../../images/dashboard/ssdNum.png')} alt='solid' title='节点总数' />
                </div>
                <div className='io-cluster-arbitration-number'>
                    <p className='io-cluster-arbitration-title'>{22}</p>
                    <p className='io-cluster-arbitration-subtitle'>{lang(`节点总数`, 'Number of hard disks, status monitoring')}</p>
                </div>
            </div>
            <div className='io-cluster-arbitration-content'>
                <div className='io-cluster-arbitration-image'>
                    <img src={require('../../images/dashboard/good.png')} alt='solid' title='正常节点数' />
                </div>
                <div className='io-cluster-arbitration-number'>
                    <p className='io-cluster-arbitration-title'>{22}</p>
                    <p className='io-cluster-arbitration-subtitle'>{lang(`正常节点数`, 'Number of hard disks, status monitoring')}</p>
                </div>
            </div>
            <div className='io-cluster-arbitration-content'>
                <div className='io-cluster-arbitration-image'>
                    <img src={require('../../images/dashboard/bad.png')} alt='solid' title='异常节点数' />
                </div>
                <div className='io-cluster-arbitration-introduce'>
                    <p className='io-cluster-arbitration-title' style={{marginLeft: 1, fontSize: 18}}>{44}</p>
                    <p className='io-cluster-arbitration-subtitle'>{lang(`异常节点数`, 'Number of hard disks, status monitoring')} </p>
                </div>
            </div>
        </div>
    );
}
