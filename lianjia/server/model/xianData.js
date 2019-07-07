const mongoose = require('../module/mongoose');
module.exports = mongoose.model(`xiandata`,
    new mongoose.Schema({
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
        datasSring: String,
        newPush: String,
        time: Date,
    })
);