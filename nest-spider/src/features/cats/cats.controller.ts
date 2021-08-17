import { Controller, Get } from '@nestjs/common';
import { MongoClient } from 'mongodb';
import * as assert from 'assert';

@Controller({ path: 'mongo_data' })
export class CatsController {

  // constructor() {}

  @Get("insert")
  async insertMongoData() {
    const msg = await this.connectMongo();
    return { msg }
  }


  async connectMongo() {
    return new Promise((resolve) => {
      const url = 'mongodb://localhost:27017';
      const dbName = 'test';

      const client = new MongoClient(url, { useUnifiedTopology: true });
      let msg = '';

      client.connect(async function (err) {
        assert.equal(null, err);

        console.log('connect is success');
        msg = 'connect is success success success'
        const db = client.db(dbName);
        const data = await db.addUser('lipcs121', 'pass', { roles: [{ role: "readWrite", db: dbName }] })
        console.log(data);
        client.close()
        resolve(msg)
      });
    })
  }
}


/**
 * const mongoose = require('mongoose');
// 数据库连接 27017是mongodb数据库的默认端口
mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true })
    .then(() => console.log('数据库连接成功'))
    .catch(() => console.log('数据库连接失败'));

// 2. 创建用户集合规则，定义验证
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 20
    },
    age: {
        type: Number,
        min: 18,
        max: 80
    },
    password: String,
    email: String,
    hobbies: [String]
});

// 创建集合 返回集合构造函数，并且拿到最重要的的东西----集合构造函数
const User = mongoose.model('User', userSchema);
 */