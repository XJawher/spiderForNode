
export let waitSeconds = time => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, time * 1000 || 3000);
    });
};

/**
 *
 * @param {随机数开始数字,只接收整数} start
 * @param {随机数结束数字,只接收整数} end
 */
export let waitRandom = (start, end) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, time * 1000 || 3000);
    });
};