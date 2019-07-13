const mongoose = require('../module/mongoose');
module.exports = mongoose.model(`zz`,
    new mongoose.Schema({
       totle: Number,
        title: String,
        address: String,
        addressSupplement: String,
        flood: String,
        floodSupplement: String,
        followInfo: String,
        tag: String,
        price: String,
        priceSign: String,
        total: String,
        time: Date,
        datasSring: String,
        newPush: String,
    })
);