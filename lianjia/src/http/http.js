import { fetchPost, } from './fetch';
const modal = {
    async getAllCity() {
        let data = await fetchPost('/api/city/sort');
        console.log(data);
    }
};

export default modal;