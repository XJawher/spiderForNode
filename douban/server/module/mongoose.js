const mongoose = require('mongoose');

(async () => {
    try {
        await mongoose.connect(`mongodb://localhost:27017/admin`, { useNewUrlParser: true }, (err, db) => {
            if (err) {
                throw err;
            }
        });
    } catch (error) {
        console.log({ code: 1, message: 'failed with connect mongodb', error: error });
        return {
            code: 1,
            message: 'failed with connect mongodb'
        }
    }
})();
module.exports = mongoose;