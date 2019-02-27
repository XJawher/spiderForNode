const model = {

    async waitSecond(time) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, time * 1000 || 3000);
        });
    },

    async test(res) {
        for (let i = 0; i < 2999; i++) {
            (function () {
                setTimeout(() => console.log(i), 1000 * i)
            })()
        }
    }

};
module.exports = model;