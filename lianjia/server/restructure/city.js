const modify = require('./modify');

const model = {
    async xian() {
        let xianRegion = {
            'beilin/': [],
            'xixian1/': [],
            'gaoling1/': [],
            'xinchengqu/': [], // 1438
            'changan4/': [], // 2549
            'weiyang/': ['p1p2p3p4p8', 'p5', 'p6p7'], // a2a6a7a8 ==>2423
            'baqiao/': ['l1l4l5l6', 'l2l3'],
            'lianhu/': ['l1l4l5l6', 'l2l3'],
            'yanta/': ['a1a7', 'a2a8', 'a3', 'ba90ea100', 'ba101ea125', 'ba126ea150', 'a6'],
        };
        return modify.modify('xa', xianRegion, 'xianLianjia');
    },
    async xianDataStruction() {
        let xianRegion = {
            'beilin/': [],
        };
        return modify.modify('xa', xianRegion, 'xianLianjia');
    },
    async sh() {
        let region = {
            'pudong/': ['p1', 'bp200ep250', 'bp250ep300', 'bp300ep350', 'bp350ep400', 'p4', 'p5', 'p6', 'p7'], // 浦东 18734
            'minhang/': ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7'], // 闵行
            'baoshan/': ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7'], // 宝山
            'xuhui/': ['p1p2p3', 'p4p5p6p7'], // 徐汇
            'putuo/': ['p1p2p3', 'p4p5p6p7'], //  普陀
            'changning/': ['p1p2p3', 'p4p5p6p7'], //  普陀
            'yangpu/': ['p1p2p3', 'p4p5p6p7'], //  普陀
            'songjiang/': ['p2p3', 'p1p4p5p6p7'], //  普陀
            'jiading/': ['p1p2', 'p3p4p5p6p7'], //  普陀
            'huangpu/': ['p1p2p3', 'p4p5p6p7'],
            'jingan/': [],
            'zhabei/': [],
            'hongkou/': [],
            'qingpu/': [],
            'fengxian/': [],
            'jinshan/': [],
        };
        return modify.modify('sh', region, 'sh');
    },
    async shenzhen() {
        let region = {
            'guangmingqu/': [],
            'pingshanqu/': [],
            'dapengxinqu/': [],
            'yantianqu/': [],
            'luohuqu/': ['p1p5', 'p2p6', 'p3p7', 'p4'],
            'futianqu/': ['p1p2p3', 'p5', 'p4p6p7'],
            'nanshanqu/': ['p1p2p3p4', 'p5', 'p6p7'],
            'baoanqu/': ['p1p2p3p4', 'p5p6p7'],
            'longhuaqu/': ['p1p2p3p4', 'p5p6p7'],
            'longgangqu/': ['p1p6p7', 'p2', 'bp300ep350', 'bp350ep400', 'p4', 'p5'],

        };
        return modify.modify('sz', region, 'sz');
    },
    async hf() {
        let region = {
            'empty': []
        };
        return modify.modify('hf', region, 'hf');
    },
    async bj() {
        let region = {
            'empty': []
        };
        return modify.modify('bj', region, 'bj');
    },
    async cq() {
        let region = {
            'empty': []
        };
        return modify.modify('cq', region, 'cq');
    },
    async fz() {
        let region = {
            'empty': []
        };
        return modify.modify('fz', region, 'fz');
    },
    async gz() {
        let region = {'empty': []};
        return modify.modify('gz', region, 'gz');
    },
    async ty() {
        let region = {'empty': []};
        return modify.modify('ty', region, 'ty');
    },
    async tj() {
        let region = {'empty': []};
        return modify.modify('tj', region, 'tj');
    },
    async km() {
        let region = {'empty': []};
        return modify.modify('km', region, 'km');
    },
    async hz() {
        let region = {'empty': []};
        return modify.modify('hz', region, 'hz');
    },
    async cd() {
        let region = {'empty': []};
        return modify.modify('cd', region, 'chengduData');
    },
    async gy() {
        let region = {'empty': []};
        return modify.modify('gy', region, 'gy');
    },
    async nn() {
        let region = {'empty': []};
        return modify.modify('nn', region, 'nn');
    },
    async lz() {
        let region = {'empty': []};
        return modify.modify('lz', region, 'lz');
    },
    async wh() {
        let region = {'empty': []};
        return modify.modify('wh', region, 'wh');
    },
    async cs() {
        let region = {'empty': []};
        return modify.modify('cs', region, 'cs');
    },
    async jn() {
        let region = {'empty': []};
        return modify.modify('jn', region, 'jn');
    },
    async sjz() {
        let region = {'empty': []};
        return modify.modify('sjz', region, 'sjz');
    },
    async hk() {
        let region = {'empty': []};
        return modify.modify('hk', region, 'hk');
    },
    async zz() {
        let region = {'empty': []};
        return modify.modify('zz', region, 'zz');
    },
    async hrb() {
        let region = {'empty': []};
        return modify.modify('hrb', region, 'hrb');
    },
    async cc() {
        let region = {'empty': []};
        return modify.modify('cc', region, 'cc');
    },
    async nj() {
        let region = {'empty': []};
        return modify.modify('nj', region, 'nj');
    },
    async nc() {
        let region = {'empty': []};
        return modify.modify('nc', region, 'nc');
    },
    async sy() {
        let region = {'empty': []};
        return modify.modify('sy', region, 'sy');
    },
    async hhht() {
        let region = {'empty': []};
        return modify.modify('hhht', region, 'hhht');
    },
    async yinchuan() {
        let region = {'empty': []};
        return modify.modify('yinchuan', region, 'yinchuan');
    },
};
module.exports = model;