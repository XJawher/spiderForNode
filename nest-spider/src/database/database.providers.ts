import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION_TEST',
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true }),
  },
];
