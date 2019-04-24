//  this model created for update mongodb time modal

const database = require('./database');

const model = {

    //  database.xianUpdateOne({ '_id': element._id }, { '$set': { datasSring: '2019-4-2' } }, { multi: 1 });

    async xianNewTotal(datasSring) {
        let data = await database.xianNewTotal(datasSring);
        return { data };
    },

    /**
     * {@param === [{_id:xxxxx,time:'2019-4-21'}]}
     */
    async batchUpdate(parma) {
        try {
            parma.forEach(element => {
                database.xianUpdateOne({ '_id': element._id }, { '$set': { datasSring: element.time } });
            });
            return { date: 'success' };
        } catch (error) {
            return { date: error };
        }
    }
};
module.exports = model;