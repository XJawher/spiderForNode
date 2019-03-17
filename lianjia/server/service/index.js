const database = require('./database');

const model = {

    /**
     * xi an second-hand house data
     */
    xian() {
        return database.xianAll();
    },

    /**
     * cheng du second-hand house data
     */
    chengdu() {

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