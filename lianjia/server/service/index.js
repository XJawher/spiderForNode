const database = require('./database');

const model = {

    /**
     * xi an second-hand house data
     */
    xian() {
        return database.xianAll();
    },
    /**
     * xi an second-hand house data
     */
    xianNewTotal(parma) {
        return database.xianNewTotal(parma);
    },

    /**
     * @param {city 要获取数据的城市}
     * @param {date 要获取数据的当前日期}
     * 这里会获取两组数据,一组是今天的,一组是昨天的,全部传到一个对象中,汇总发送, {today:[{xxx}],tomorrow:[{xxx}]
     * db.cities.find({"time" : {"$gte":ISODate("2019-03-18")}}).sort({"total":1}) 这是选择 3-18 的数据,排序的方法为总数的 1 开头的
     * 但是这个排序不是很优雅,当日的大小进行排序,应该是有方法的,但是我没找到而已
     * db.cities.find({"time" : {"$gte":ISODate("2019-03-18"),"$lte":ISODate("2019-03-20")},cityEN:'xa'}) 这是选择西安的数据,从 3-18 号开始, 3-19 结束
     */
    cityRankings(city, date) {
        return database.cityAll();
    },

    /**
     * get total city data from dataBase
     */
    city() {
        return database.city();
    },

    /**
     * get total city data from dataBase
     */
    cityAll() {
        return database.cityAll();
    },


};
module.exports = model;