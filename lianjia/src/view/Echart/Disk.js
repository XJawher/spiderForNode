import React from 'react';
export default function DashDisk (){

    let lang = (cn, en) => cn;

    return (
        <div className='io-dash-disk'>
            <div className='io-cluster-disk-content'>
                <div className='io-cluster-disk-image'>
                    <img src={require('../../images/dashboard/ssd1.png')} alt='solid' title='硬盘管理' style={{marginTop: -5}} />
                </div>
                <div className='io-cluster-disk-title' style={{marginLeft: 15}}>
                    <p className='hard-disk-management'>{lang('硬盘', 'Hard disk management')}</p>
                    <p className='hard-disk-number'>{lang('硬盘状态,数量监控', 'Number of hard disks, status monitoring')}</p>
                </div>
            </div>
            <div className='io-cluster-disk-content'>
                <div className='io-cluster-disk-image'>
                    <img src={require('../../images/dashboard/ssdNum.png')} alt='solid' title='硬盘总数' />
                </div>
                <div className='io-cluster-disk-number-information'>
                    <p className='detailed-quantity'>{3}</p>
                    <p className='detailed-introduce'>{lang('硬盘总数', 'Number of hard disks, status monitoring')}</p>
                </div>
            </div>
            <div className='io-cluster-disk-content'>
                <div className='io-cluster-disk-image'>
                    <img src={require('../../images/dashboard/good.png')} alt='solid' title='正常硬盘数' />
                </div>
                <div className='io-cluster-disk-number-information'>
                    <p className='detailed-quantity'>{1}</p>
                    <p className='detailed-introduce'>{lang(' 正常硬盘数 ', 'Number of hard disks, status monitoring')}</p>
                </div>
            </div>
            <div className='io-cluster-disk-content'>
                <div className='io-cluster-disk-image'>
                    <img src={require('../../images/dashboard/bad.png')} alt='solid' title='异常硬盘数' />
                </div>
                <div className='io-cluster-disk-title'>
                    <p className='detailed-quantity' style={{marginLeft: 1}}>{1}</p>
                    <p className='detailed-introduce'>{lang(' 异常硬盘数 ', 'Number of hard disks, status monitoring')}</p>
                </div>
            </div>
        </div>
    );
}
