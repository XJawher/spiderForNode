const news = require('../model/news');
const xian = require('../model/xian');
const hf = require('../model/hf');
const bj = require('../model/bj');
const cq = require('../model/cq');
const fz = require('../model/fz');
const gz = require('../model/gz');
const sz = require('../model/sz');
const gy = require('../model/gy');
const nn = require('../model/nn');
const lz = require('../model/lz');
const wh = require('../model/wh');
const cs = require('../model/cs');
const sjz = require('../model/sjz');
const hk = require('../model/hk');
const zz = require('../model/zz');
const hrb = require('../model/hrb');
const nj = require('../model/nj');
const cc = require('../model/cc');
const nc = require('../model/nc');
const sy = require('../model/sy');
const hhht = require('../model/hhht');
const yinchuan = require('../model/yinchuan');
const sh = require('../model/sh');
const jn = require('../model/jn');
const ty = require('../model/ty');
const tj = require('../model/tj');
const km = require('../model/km');
const hz = require('../model/hz');
const city = require('../model/city');
const xianData = require('../model/xianData');
const chengduData = require('../model/chengduData');
const chengdu = require('../model/chengdu');
const dao = require('../module/dao');

const model = {
    async addNews(param) {
        return await dao.createOne(news, param);
    },

    async xianLianjia(param) {
        return await dao.createOne(xian, param);
    },

    async xianUpdateOne(query, param) {
        return await dao.updateOne(xian, query, param);
    },

    async xianNewTotal(param) {
        return await dao.findAll(xian, param);
    },

    async xianData(param) {
        return await dao.createOne(xianData, param);
    },

    async chengduData(param) {
        return await dao.createOne(chengduData, param);
    },

    async chengduLianjia(param) {
        return await dao.createOne(chengdu, param);
    },

    async chengduAll(param) {
        return await dao.findAll(chengdu, param);
    },

    async xianAll(param) {
        return await dao.findAll(xianData, param);
    },

    async city(param) {
        return await dao.createOne(city, param);
    },

    async cityAll(param) {
        return await dao.findAll(city, param);
    },

    async hf(param) {
        return await dao.createOne(hf, param);
    },

    async bj(param) {
        return await dao.createOne(bj, param);
    },

    async cq(param) {
        return await dao.createOne(cq, param);
    },

    async fz(param) {
        return await dao.createOne(fz, param);
    },

    async gz(param) {
        return await dao.createOne(gz, param);
    },

    async sz(param) {
        return await dao.createOne(sz, param);
    },

    async gy(param) {
        return await dao.createOne(gy, param);
    },

    async nn(param) {
        return await dao.createOne(nn, param);
    },

    async lz(param) {
        return await dao.createOne(lz, param);
    },

    async wh(param) {
        return await dao.createOne(wh, param);
    },

    async cs(param) {
        return await dao.createOne(cs, param);
    },

    async sjz(param) {
        return await dao.createOne(sjz, param);
    },

    async hk(param) {
        return await dao.createOne(hk, param);
    },

    async zz(param) {
        return await dao.createOne(zz, param);
    },

    async hrb(param) {
        return await dao.createOne(hrb, param);
    },

    async nj(param) {
        return await dao.createOne(nj, param);
    },

    async cc(param) {
        return await dao.createOne(cc, param);
    },

    async nc(param) {
        return await dao.createOne(nc, param);
    },

    async sy(param) {
        return await dao.createOne(sy, param);
    },

    async tj(param) {
        return await dao.createOne(tj, param);
    },

    async hhht(param) {
        return await dao.createOne(hhht, param);
    },

    async yinchuan(param) {
        return await dao.createOne(yinchuan, param);
    },

    async sh(param) {
        return await dao.createOne(sh, param);
    },

    async jn(param) {
        return await dao.createOne(jn, param);
    },

    async ty(param) {
        return await dao.createOne(ty, param);
    },

    async km(param) {
        return await dao.createOne(km, param);
    },

    async hz(param) {
        return await dao.createOne(hz, param);
    },
};

module.exports = model;