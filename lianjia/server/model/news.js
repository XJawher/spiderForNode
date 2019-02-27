const mongoose = require('../module/mongoose');
module.exports = mongoose.model('baidu_hot_news',
    new mongoose.Schema({
        title: String,
        href: String
    })
);