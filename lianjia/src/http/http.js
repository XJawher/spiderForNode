import { fetchPost, fetchGet, } from './fetch';
const modal = {
    async getAllCity() {
        let data = await fetchPost('/api/city/sort');
        console.log(data);
    },

    async getCityByCondition(name = '222', time = 123, ) {
        let data = await fetchPost('/api/city/condition', { name, time });
        console.log(data);
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
};

export default modal;