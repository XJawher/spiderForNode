let mongoose = require('mongoose'),
    assert = require('assert');

let Schema = mongoose.Schema;

let filmSchema = new Schema({       //自定义相应的表数据字段
    title: String,
    type: String,
    directories: String,
    scriptwriter: String,
    actors: String
});
//映射collection并生成model对象用于管理数据表的增删改查
//默认是映射到名为films的collection
//若自定义表明则：let filmSchema = new Schema({..}, { collection: 'data' });  'data'即为自定义名称
let Film = mongoose.model('Film', filmSchema);

let db = mongoose.connect('mongodb://127.0.0.1:27017/spider');
db.connection.on('error', (err) => {
    console.log(`数据库连接失败：${err}`);
});
db.connection.on('open', () => {
    console.log('数据库连接成功');
});

module.exports = { Film: Film };