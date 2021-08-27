import { Mongoose } from 'mongoose';
import { DailyNewsSchema } from './schemas/daily-news.schemas';

export const dailyNewsProviders = [
  {
    provide: 'DAILY_NEWS_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('DailyNews', DailyNewsSchema),
    inject: ['DATABASE_CONNECTION_TEST'],
  },
];
