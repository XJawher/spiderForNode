// this page is template for city's administrator
const template = (administrator) => {
    // {administrative: '梅沙', datasSring: datasSring, data: []},
    let newAdministrator = [];
    administrator.forEach(item => {
        item && newAdministrator.push({administrative: item, datasSring: 'datasSring', data: []});
    });
    return JSON.stringify(newAdministrator);
};
const diffValueOfPrice = (administratorValue) => {
    // console.log(administratorValue);

    // const data = {
    //     "2019-7-25": [{"administrative": "西咸", "datasSring": "2019-7-25", "priceMiddle": "126.00", "areaMiddle": "94.00", "averagePrice": "130.55", "averageArea": "91.72", "priceSignMiddle": "14402.00", "priceSignAverage": "13977.44"}, {"administrative": "曲江", "datasSring": "2019-7-25", "priceMiddle": "218.00", "areaMiddle": "119.46", "averagePrice": "311.59", "averageArea": "134.00", "priceSignMiddle": "19763.00", "priceSignAverage": "20626.18"}, {"administrative": "高陵", "datasSring": "2019-7-25", "priceMiddle": "60.00", "areaMiddle": "83.77", "averagePrice": "62.90", "averageArea": "81.30", "priceSignMiddle": "7892.50", "priceSignAverage": "7904.25"}, {"administrative": "长安", "datasSring": "2019-7-25", "priceMiddle": "135.00", "areaMiddle": "99.11", "averagePrice": "156.13", "averageArea": "110.36", "priceSignMiddle": "13635.50", "priceSignAverage": "14076.26"}, {"administrative": "浐灞", "datasSring": "2019-7-25", "priceMiddle": "140.00", "areaMiddle": "96.00", "averagePrice": "179.61", "averageArea": "109.28", "priceSignMiddle": "14773.00", "priceSignAverage": "15617.01"}, {"administrative": "城西", "datasSring": "2019-7-25", "priceMiddle": "130.00", "areaMiddle": "90.00", "averagePrice": "141.35", "averageArea": "95.00", "priceSignMiddle": "14462.00", "priceSignAverage": "14668.22"}, {"administrative": "高新", "datasSring": "2019-7-25", "priceMiddle": "165.00", "areaMiddle": "95.85", "averagePrice": "209.64", "averageArea": "107.09", "priceSignMiddle": "17462.00", "priceSignAverage": "18575.25"}, {"administrative": "城南", "datasSring": "2019-7-25", "priceMiddle": "130.00", "areaMiddle": "91.54", "averagePrice": "142.93", "averageArea": "97.06", "priceSignMiddle": "14193.50", "priceSignAverage": "14635.05"}, {"administrative": "城北", "datasSring": "2019-7-25", "priceMiddle": "125.00", "areaMiddle": "96.00", "averagePrice": "135.38", "averageArea": "101.72", "priceSignMiddle": "12858.00", "priceSignAverage": "13251.39"}, {"administrative": "城东", "datasSring": "2019-7-25", "priceMiddle": "130.00", "areaMiddle": "96.00", "averagePrice": "148.65", "averageArea": "103.96", "priceSignMiddle": "13334.00", "priceSignAverage": "13798.14"}, {"administrative": "经开", "datasSring": "2019-7-25", "priceMiddle": "140.00", "areaMiddle": "99.22", "averagePrice": "162.71", "averageArea": "108.74", "priceSignMiddle": "14055.00", "priceSignAverage": "14516.62"}, {"administrative": "城内", "datasSring": "2019-7-25", "priceMiddle": "78.00", "areaMiddle": "66.00", "averagePrice": "98.32", "averageArea": "79.95", "priceSignMiddle": "11834.50", "priceSignAverage": "12205.22"}],
    //     "2019-8-4": [{"administrative": "西咸", "datasSring": "2019-8-4", "priceMiddle": "126.00", "areaMiddle": "93.88", "averagePrice": "127.16", "averageArea": "90.04", "priceSignMiddle": "14352.00", "priceSignAverage": "13813.34"}, {"administrative": "曲江", "datasSring": "2019-8-4", "priceMiddle": "220.00", "areaMiddle": "120.05", "averagePrice": "311.23", "averageArea": "134.33", "priceSignMiddle": "19771.00", "priceSignAverage": "20625.21"}, {"administrative": "高陵", "datasSring": "2019-8-4", "priceMiddle": "68.00", "areaMiddle": "86.22", "averagePrice": "68.16", "averageArea": "88.23", "priceSignMiddle": "7899.00", "priceSignAverage": "7961.80"}, {"administrative": "长安", "datasSring": "2019-8-4", "priceMiddle": "136.00", "areaMiddle": "99.11", "averagePrice": "158.35", "averageArea": "110.32", "priceSignMiddle": "13637.00", "priceSignAverage": "14465.91"}, {"administrative": "浐灞", "datasSring": "2019-8-4", "priceMiddle": "139.45", "areaMiddle": "95.00", "averagePrice": "176.43", "averageArea": "107.77", "priceSignMiddle": "14779.00", "priceSignAverage": "15591.34"}, {"administrative": "城西", "datasSring": "2019-8-4", "priceMiddle": "130.00", "areaMiddle": "90.00", "averagePrice": "140.71", "averageArea": "94.34", "priceSignMiddle": "14472.00", "priceSignAverage": "14649.75"}, {"administrative": "高新", "datasSring": "2019-8-4", "priceMiddle": "165.00", "areaMiddle": "96.00", "averagePrice": "210.86", "averageArea": "107.58", "priceSignMiddle": "17430.50", "priceSignAverage": "18635.31"}, {"administrative": "城南", "datasSring": "2019-8-4", "priceMiddle": "130.00", "areaMiddle": "91.65", "averagePrice": "142.24", "averageArea": "96.41", "priceSignMiddle": "14185.00", "priceSignAverage": "14653.23"}, {"administrative": "城北", "datasSring": "2019-8-4", "priceMiddle": "125.00", "areaMiddle": "95.78", "averagePrice": "137.70", "averageArea": "102.41", "priceSignMiddle": "12865.00", "priceSignAverage": "13295.52"}, {"administrative": "城东", "datasSring": "2019-8-4", "priceMiddle": "130.00", "areaMiddle": "95.63", "averagePrice": "146.49", "averageArea": "102.81", "priceSignMiddle": "13253.00", "priceSignAverage": "13735.57"}, {"administrative": "经开", "datasSring": "2019-8-4", "priceMiddle": "140.00", "areaMiddle": "97.66", "averagePrice": "161.08", "averageArea": "107.11", "priceSignMiddle": "14079.00", "priceSignAverage": "14513.84"}, {"administrative": "城内", "datasSring": "2019-8-4", "priceMiddle": "80.00", "areaMiddle": "67.65", "averagePrice": "99.38", "averageArea": "80.01", "priceSignMiddle": "11653.50", "priceSignAverage": "12257.78"}],
    // };
    let pureFlood = [];
    // [{"administrative": "西咸",priceChanged:'-1345',pricePercent:'-20%'}]
    const keyDate = [];
    const valueDate = [];
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
            return `上涨${price}/平,涨幅${percent}%`;
        } else if (price < 0) {
            return `下跌${price}/平,跌幅${percent}%`;
        } else {
            return `持平${price}/平,持平${percent}%`;
        }
    };
    results.sort((a, b) => a.priceChanged - b.priceChanged).forEach(item => {
        console.log(`${item.administrative}${item.dateRange}单价${priceChanged(item.pricePercent, item.priceChanged)}`);
    });
    return {results: results.sort((a, b) => a.priceChanged - b.priceChanged), compareDateAll};
};
// 算法 algorithm
export {template, diffValueOfPrice};
