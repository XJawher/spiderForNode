import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION_TEST',
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true }),
  },

  // ! https://blog.csdn.net/m0_37263637/article/details/78963991 链接两个数据库
  // ! 这部分是需要写一个新的函数。
  // 这里不能直接去操作两个不同的 数据库 比如新闻的数据就进 news 这个数据库。
  // 用户的数据进 user 这个数据库
  // {
  //   provide: 'DATABASE_CONNECTION_ADMIN',
  //   useFactory: async (): Promise<typeof mongoose> =>
  //     await mongoose.connect('mongodb://localhost/admin', { useNewUrlParser: true, useUnifiedTopology: true }),
  // },
];
