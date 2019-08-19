// this page is template for city's administrator
const template = (administrator) => {
    let newAdministrator = [];
    administrator.forEach(item => {
        item && newAdministrator.push({administrative: item, datasSring: 'datasSring', data: []});
    });
    return JSON.stringify(newAdministrator);
};
const diffValueOfPrice = (administratorValue) => {
    let pureFlood = [];
    const keyDate = [];
    const valueDate = [];
    let count = {
        plus: 0,
        flat: 0,
        fall: 0,
    };
    for (const [key, value] of Object.entries(administratorValue)) {
        keyDate.push(key);
        valueDate.push(...value);
        value.forEach(item => {
            pureFlood.push(item.administrative);
        });
    }
    const compareLastDate = [keyDate[keyDate.length - 1], keyDate[keyDate.length - 2]];
    pureFlood = [...new Set(pureFlood)];
    let compareDate = {};
    let compareDateAll = {};
    pureFlood.forEach(item => compareDate[item] = []);
    pureFlood.forEach(item => compareDateAll[item] = []);
    valueDate.forEach(ele => {
        for (const key of Object.keys(compareDate)) {
            if (key === ele.administrative) {
                compareDateAll[key].push(ele);
            }
            // ssss;
            if (key === ele.administrative && compareLastDate.some(itemDate => itemDate === ele.datasSring)) {
                compareDate[key].push(ele);
            }
        }
    });
    let results = [];

    for (const value of Object.values(compareDate)) {
        value.reduce((previous, current) => {
            if (previous && previous.priceSignMiddle) {
                let priceChanged = Number(current.priceSignMiddle) - Number(previous.priceSignMiddle).toFixed(0);
                let pricePercent = (((Number(current.priceSignMiddle) - Number(previous.priceSignMiddle)) / Number(previous.priceSignMiddle)) * 100).toFixed(2);
                results.push({administrative: current.administrative, priceChanged: Number(priceChanged), pricePercent: Number(pricePercent), dateRange: `从${previous.datasSring} ${previous.priceSignMiddle}/平到${current.datasSring} ${current.priceSignMiddle}/平`});
            } else {
                return current;
            }
        }, {});
    }
    const priceChanged = (percent, price) => {
        if (price > 0) {
            count.plus++;
            return `上涨${price}/平,涨幅${percent}%`;
        } else if (price < 0) {
            count.fall++;
            return `下跌${price}/平,跌幅${percent}%`;
        } else {
            count.flat++;
            return `持平${price}/平,持平${percent}%`;
        }
    };
    results.sort((a, b) => a.priceChanged - b.priceChanged).forEach(item => {
        console.log(`${item.administrative}${item.dateRange}单价${priceChanged(item.pricePercent, item.priceChanged)}`);
    });
    let all = count.plus + count.fall + count.flat;
    console.log(`上涨地区${count.plus}个占比${((count.plus / all) * 100).toFixed(2)}%,持平地区${count.flat}个占比${((count.flat / all) * 100).toFixed(2)}%,下跌地区${count.fall}个占比${((count.fall / all) * 100).toFixed(2)}%`);
    return {results: results.sort((a, b) => a.priceChanged - b.priceChanged), compareDateAll};
};
// 算法 algorithm
export {template, diffValueOfPrice};
