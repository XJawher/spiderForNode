const modify = require('./modify');

const model = {
    async xian() {
        let xianRegion = {
            beilin: [],
            xixian1: [],
            gaoling1: [],
            xinchengqu: [], // 1438
            changan4: [], // 2549
            weiyang: ['a2a6a7a8', 'a1a3', 'a4', 'a5'], // a2a6a7a8 ==>2423
            baqiao: ['l1l4l5l6', 'l2l3'],
            lianhu: ['l1l4l5l6', 'l2l3'],
            yanta: ['a1a7', 'a2a8', 'a3', 'ba90ea100', 'ba101ea125', 'ba126ea150', 'a6'],
        };

        return modify.modify('xa', xianRegion);
    }
};
module.exports = model;