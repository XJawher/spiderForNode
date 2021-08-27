import { HttpModule, Module } from '@nestjs/common';
import { DailyNewsController } from './daily-news.controller';
import { DailyNewsService } from './daily-news.service';
import { DatabaseModule } from '../../database/database.module';
import { dailyNewsProviders } from './daily-news.providers';

@Module({
  imports: [HttpModule, DatabaseModule],
  controllers: [DailyNewsController],
  providers: [DailyNewsService, ...dailyNewsProviders,],
})
export class DailyNewsModule {}
