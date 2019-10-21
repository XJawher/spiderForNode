import {fetchPost, fetchGet, } from './fetch';
import store from '../redux/index';
import generalAction from "../redux/actions/generalAction";

const modal = {
    async modify() {
        let data = await fetchPost('/api/city/modify');
        console.log(data);
    },

    async getCityByCondition(name = '金叶新城', time = '2019-5-7', ) {
        let res = [];
        let data = await fetchPost('/api/city/condition', {name, time});
        res = data.data;
        store.dispatch(generalAction.xian(res));
        return data;
    },

    async testGet(name = 'test', time = 123, ) {
        let data = await fetchGet('/api/city/get', {name, time});
        console.log(data);
    },

    async cityRankings(name = 'test', time = 123, ) {
        return await fetchPost('/api/city/rankings');
    },

    async insertXian(name = 'test', time = 123, ) {
        return await fetchGet('/api/city/xian');
    },

    async xianNewTotal(datasSring = '') {
        return await fetchGet('api/city/xianNewTotal', {datasSring: datasSring});
    },

    async updateTime(datasSring = '') {
        return await fetchGet('api/update/gettime', {datasSring: datasSring});
    },

    async updateSetTime(data) {
        return await fetchPost('api/update/settime', {data});
    },

    /*
     * @param {shanghai,shenzhen,xian} city
     * @param {*} datasSring
     */
    async getSelectCityData(city, param) {
        let data = await fetchPost('/api/get/city', {city, param});
        // let flood = [];
        // data.data.data.forEach(element => {
        //     flood.push(element.flood);
        // });
        console.log(data);

        if (data.code === 0) {
            store.dispatch(generalAction[city](data.data));
        }
        return data;
    },
};

export default modal;