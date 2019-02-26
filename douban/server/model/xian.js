const mongoose = require('../module/mongoose');
module.exports = mongoose.model('xian_2',
    new mongoose.Schema({
        totle: Number,
        title: String,
    })
);