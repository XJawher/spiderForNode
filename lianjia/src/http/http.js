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
};

export default modal;