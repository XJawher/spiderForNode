const mongoose = require('../module/mongoose');
module.exports = mongoose.model(`hz`,
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
        time: Date,
    })
);