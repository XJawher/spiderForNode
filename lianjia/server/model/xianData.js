const mongoose = require('../module/mongoose');
module.exports = mongoose.model(`xian_2019_2_27_09_51_23`,
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
    })
);