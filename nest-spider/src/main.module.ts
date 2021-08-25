import { HttpModule, Module } from '@nestjs/common';

import { DailyNewsController } from './features/daily-news/daily-news.controller';
import { DailyNewsService } from './features/daily-news/daily-news.service';
import { CatsModule } from './features/cats/cats.module';
import { DatabaseModule } from './database/database.module';
import { CoreModule } from './core/core.module';
@Module({
  imports: [HttpModule, CatsModule, DatabaseModule, CoreModule],
  controllers: [DailyNewsController],
  providers: [DailyNewsService],
})
export class MainModule {}

