const mongoose = require('../module/mongoose');
module.exports = mongoose.model(`city`,
    new mongoose.Schema({
        total: String,
        cityCH: String,
        cityEN: String,
        province: String,
        time: Date,
    })
);