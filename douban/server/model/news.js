const mongoose = require('../module/mongoose');
module.exports = mongoose.model('admin',
    new mongoose.Schema({
        title: String,
        href: String
    })
);