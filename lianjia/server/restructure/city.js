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
    async hf() {
        let region = {
            'empty': []
        };
        return modify.modify('hf', region, 'hf');
    },
};
module.exports = model;