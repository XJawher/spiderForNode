import { fetchPost, fetchGet, } from './fetch';
import store from '../redux/index';
import generalAction from "../redux/actions/generalAction";

const modal = {
    async getAllCity() {
        let data = await fetchPost('/api/city/sort');
        console.log(data);
    },

    async getCityByCondition(name = '金叶新城', time = '2019-5-7', ) {
        let data = await fetchPost('/api/city/condition', { name, time });
        store.dispatch(generalAction.setXianData(data.data));
        return data;
    },

    async testGet(name = 'test', time = 123, ) {
        let data = await fetchGet('/api/city/get', { name, time });
        console.log(data);
    },

    async cityRankings(name = 'test', time = 123, ) {
        return await fetchPost('/api/city/rankings');
    },

    async insertXian(name = 'test', time = 123, ) {
        return await fetchGet('/api/city/xian');
    },

    async xianNewTotal(datasSring = '') {
        return await fetchGet('api/city/xianNewTotal', { datasSring: datasSring });
    },

    async updateTime(datasSring = '') {
        return await fetchGet('api/update/gettime', { datasSring: datasSring });
    },

    async updateSetTime(data) {
        return await fetchPost('api/update/settime', { data });
    },

    async getSelectCity(city, datasSring) {
        return await fetchPost('/api/get/city', { city, datasSring });
    },
};

export default modal;