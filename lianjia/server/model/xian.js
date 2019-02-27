let myDate = new Date();
let fullYear = myDate.toLocaleDateString();
let timeSecond = myDate.toLocaleTimeString();
timeSecond.replace(':', '_');
fullYear.replace('-', '_');
const mongoose = require('../module/mongoose');
module.exports = mongoose.model(`xian_${fullYear.replace(/-/g, '_')}_${timeSecond.replace(/:/g, '_')}`,
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