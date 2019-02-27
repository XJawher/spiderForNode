
/**
 *
 * @param {整数时间} time
 */
exports.waitSeconds = time => {
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
exports.waitRandom = (start, end) => {
    return new Promise(resolve => {
        let time = start + Math.random() * (end - start)
        setTimeout(() => {
            resolve();
        }, time.toFixed(0) * 1000 || 3000);
    });
};