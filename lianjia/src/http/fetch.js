import { stringify } from 'querystring';
// import routerPath from '../views/routerPath';
// import { ckGet } from '../services/cookie/index';

// this url is always allowed to access

let httpServer = (url, options) => {
    return new Promise(async (resolve, reject) => {
        options.credentials = 'same-origin';
        options.headers = { 'Content-Type': 'application/json; charset=utf-8' };
        try {
            let response = await fetch(url, options);
            if (response.ok) {
                let { code, data, message } = await response.json();
                if (code === 0) {
                    resolve({ code, data });
                } else {
                    resolve({ code, message });
                }
            } else {
                reject({ msg: response.statusText });
            }
        } catch (error) {
            reject(error);
        }
    });
};

let initSearchUrl = (url, param) => (param ? url + '?' + stringify(param) : url);

export let fetchGet = (url, param) => (httpServer(initSearchUrl(url, param), { method: 'GET' }));

export let fetchPost = (url, param) => (httpServer(url, { method: 'POST', body: JSON.stringify(param) }));

export let fetchMock = (data) => new Promise(resolve => setTimeout(() => resolve(data || true), 500));