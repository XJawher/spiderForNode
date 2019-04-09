// Province
import React, { Component } from 'react';
// import { Button } from 'antd';

export default class Province extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityTotal: [
                // { province: '安徽', cityEN: 'aq', cityCH: '安庆' },
                { province: '安徽', cityEN: 'hf', cityCH: '合肥' },
                //  { province: '安徽', cityEN: 'mas', cityCH: '马鞍山' },
                //  { province: '安徽', cityEN: 'wuhu', cityCH: '芜湖' },
                { province: '北京', cityEN: 'bj', cityCH: '北京' },
                { province: '重庆', cityEN: 'cq', cityCH: '重庆' },
                { province: '福建', cityEN: 'fz', cityCH: '福州' },
                { province: '福建', cityEN: 'quanzhou', cityCH: '泉州' },
                { province: '福建', cityEN: 'xm', cityCH: '厦门' },
                { province: '广东', cityEN: 'dg', cityCH: '东莞' },
                { province: '广东', cityEN: 'fs', cityCH: '佛山' },
                { province: '广东', cityEN: 'gz', cityCH: '广州' },
                //   { province: '广东', cityEN: 'hui', cityCH: '惠州' },
                //   { province: '广东', cityEN: 'jiangmen', cityCH: '江门' },
                //   { province: '广东', cityEN: 'qy', cityCH: '清远' },
                { province: '广东', cityEN: 'sz', cityCH: '深圳' },
                { province: '广东', cityEN: 'zh', cityCH: '珠海' },
                //   { province: '广东', cityEN: 'zhanjiang', cityCH: '湛江' },
                //   { province: '广东', cityEN: 'zs', cityCH: '中山' },
                { province: '贵州', cityEN: 'gy', cityCH: '贵阳' },
                // { province: '广西', cityEN: 'bh', cityCH: '北海' },
                //  { province: '广西', cityEN: 'gl', cityCH: '桂林' },
                //  { province: '广西', cityEN: 'liuzhou', cityCH: '柳州' },
                { province: '广西', cityEN: 'nn', cityCH: '南宁' },
                { province: '甘肃', cityEN: 'lz', cityCH: '兰州' },
                // { province: '湖北', cityEN: 'huangshi', cityCH: '黄石' },
                // { province: '湖北', cityEN: 'hg', cityCH: '黄冈' },
                { province: '湖北', cityEN: 'wh', cityCH: '武汉' },
                // { province: '湖北', cityEN: 'xy', cityCH: '襄阳' },
                // { province: '湖北', cityEN: 'xn', cityCH: '咸宁' },
                // { province: '湖北', cityEN: 'yichang', cityCH: '宜昌' },
                { province: '湖南', cityEN: 'cs', cityCH: '长沙' },
                // { province: '湖南', cityEN: 'changde', cityCH: '常德' },
                // { province: '湖南', cityEN: 'yy', cityCH: '岳阳' },
                // { province: '湖南', cityEN: 'zhuzhou', cityCH: '株洲' },
                // { province: '河北', cityEN: 'bd', cityCH: '保定' },
                // { province: '河北', cityEN: 'chengde', cityCH: '承德' },
                // { province: '河北', cityEN: 'hd', cityCH: '邯郸' },
                // { province: '河北', cityEN: 'hs', cityCH: '衡水' },
                // { province: '河北', cityEN: 'lf', cityCH: '廊坊' },
                // { province: '河北', cityEN: 'qhd', cityCH: '秦皇岛' },
                { province: '河北', cityEN: 'sjz', cityCH: '石家庄' },
                // { province: '河北', cityEN: 'ts', cityCH: '唐山' },
                // { province: '河北', cityEN: 'xt', cityCH: '邢台' },
                // { province: '河北', cityEN: 'zjk', cityCH: '张家口' },
                // { province: '海南', cityEN: 'bt', cityCH: '保亭' },
                // { province: '海南', cityEN: 'cm', cityCH: '澄迈' },
                // { province: '海南', cityEN: 'hk', cityCH: '海口' },
                // { province: '海南', cityEN: 'lg', cityCH: '临高' },
                // { province: '海南', cityEN: 'ld', cityCH: '乐东' },
                // { province: '海南', cityEN: 'ls', cityCH: '陵水' },
                // { province: '海南', cityEN: 'qh', cityCH: '琼海' },
                // { province: '海南', cityEN: 'dz', cityCH: '儋州' },
                // { province: '海南', cityEN: 'da', cityCH: '定安' },
                // { province: '海南', cityEN: 'qz', cityCH: '琼中' },
                { province: '海南', cityEN: 'san', cityCH: '三亚' },
                // { province: '海南', cityEN: 'wzs', cityCH: '五指山' },
                // { province: '海南', cityEN: 'wc', cityCH: '文昌' },
                // { province: '海南', cityEN: 'wn', cityCH: '万宁' },
                // { province: '河南', cityEN: 'kf', cityCH: '开封' },
                { province: '河南', cityEN: 'luoyang', cityCH: '洛阳' },
                // { province: '河南', cityEN: 'xinxiang', cityCH: '新乡' },
                // { province: '河南', cityEN: 'xc', cityCH: '许昌' },
                { province: '河南', cityEN: 'zz', cityCH: '郑州' },
                { province: '黑龙江', cityEN: 'hrb', cityCH: '哈尔滨' },
                // { province: '江苏', cityEN: 'changzhou', cityCH: '常州' },
                // { province: '江苏', cityEN: 'ha', cityCH: '淮安' },
                { province: '江苏', cityEN: 'nj', cityCH: '南京' },
                // { province: '江苏', cityEN: 'nt', cityCH: '南通' },
                { province: '江苏', cityEN: 'su', cityCH: '苏州' },
                { province: '江苏', cityEN: 'wx', cityCH: '无锡' },
                // { province: '江苏', cityEN: 'zj', cityCH: '镇江' },
                // { province: '江苏', cityEN: 'xz', cityCH: '徐州' },
                // { province: '江苏', cityEN: 'yc', cityCH: '盐城' },
                { province: '吉林', cityEN: 'jl', cityCH: '吉林' },
                { province: '吉林', cityEN: 'cc', cityCH: '长春' },
                // { province: '江西', cityEN: 'ganzhou', cityCH: '赣州' },
                // { province: '江西', cityEN: 'jiujiang', cityCH: '九江' },
                // { province: '江西', cityEN: 'jian', cityCH: '吉安' },
                // { province: '江西', cityEN: 'sr', cityCH: '上饶' },
                { province: '江西', cityEN: 'nc', cityCH: '南昌' },
                { province: '辽宁', cityEN: 'dl', cityCH: '大连' },
                // { province: '辽宁', cityEN: 'dd', cityCH: '丹东' },
                { province: '辽宁', cityEN: 'sy', cityCH: '沈阳' },
                { province: '内蒙古', cityEN: 'hhht', cityCH: '呼和浩特' },
                { province: '宁夏', cityEN: 'yinchuan', cityCH: '银川' },
                { province: '上海', cityEN: 'sh', cityCH: '上海' },
                { province: '四川', cityEN: 'cd', cityCH: '成都' },
                // { province: '四川', cityEN: 'dy', cityCH: '德阳' },
                // { province: '四川', cityEN: 'dazhou', cityCH: '达州' },
                //  { province: '四川', cityEN: 'leshan', cityCH: '乐山' },
                // { province: '四川', cityEN: 'liangshan', cityCH: '凉山' },
                // { province: '四川', cityEN: 'mianyang', cityCH: '绵阳' },
                // { province: '四川', cityEN: 'ms', cityCH: '眉山' },
                // { province: '四川', cityEN: 'nanchong', cityCH: '南充' },
                { province: '山东', cityEN: 'jn', cityCH: '济南' },
                //  { province: '山东', cityEN: 'linyi', cityCH: '临沂' },
                { province: '山东', cityEN: 'qd', cityCH: '青岛' },
                //   { province: '山东', cityEN: 'wf', cityCH: '潍坊' },
                //   { province: '山东', cityEN: 'weihai', cityCH: '威海' },
                //   { province: '山东', cityEN: 'yt', cityCH: '烟台' },
                //   { province: '山东', cityEN: 'zb', cityCH: '淄博' },
                { province: '陕西', cityEN: 'xianyang', cityCH: '咸阳' },
                // { province: '陕西', cityEN: 'hanzhong', cityCH: '汉中' },
                // { province: '陕西', cityEN: 'baoji', cityCH: '宝鸡' },
                { province: '陕西', cityEN: 'xa', cityCH: '西安' },
                // { province: '山西', cityEN: 'jz', cityCH: '晋中' },
                { province: '山西', cityEN: 'ty', cityCH: '太原' },
                { province: '天津', cityEN: 'tj', cityCH: '天津' },
                // { province: '云南', cityEN: 'dali', cityCH: '大理' },
                { province: '云南', cityEN: 'km', cityCH: '昆明' },
                // { province: '云南', cityEN: 'xsbn', cityCH: '西双版纳' },
                { province: '浙江', cityEN: 'hz', cityCH: '杭州' },
                // { province: '浙江', cityEN: 'huzhou', cityCH: '湖州' },
                // { province: '浙江', cityEN: 'jx', cityCH: '嘉兴' },
                // { province: '浙江', cityEN: 'jh', cityCH: '金华' },
                { province: '浙江', cityEN: 'nb', cityCH: '宁波' },
                { province: '浙江', cityEN: 'sx', cityCH: '绍兴' },
                // { province: '浙江', cityEN: 'taizhou', cityCH: '台州' },
                { province: '浙江', cityEN: 'wz', cityCH: '温州' }]
        };
    }

    render() {
        return (
            <div className="xc-province-body-wrapper">
                <div className='xc-province-cities'>
                    {
                        this.state.cityTotal.map(item => (
                            <div key={item.cityEN} className='xc-province-item-city'>
                                {item.cityCH}
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}