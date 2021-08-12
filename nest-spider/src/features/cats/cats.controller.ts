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

      const client = new MongoClient(url);
      let msg = '';
      client.connect(function (err) {
        assert.equal(null, err);

        console.log('connect is success');
        msg = 'connect is success success success'
        const db = client.db(dbName);

        client.close()

        resolve(msg)
      });
    })
  }
}
