import { HttpModule, Module } from '@nestjs/common';

import { APP_PIPE } from '@nestjs/core';
import { ValidationPipe } from './pipe/validation.pipe';
import { DailyNewsController } from './features/daily-news/daily-news.controller';
import { DailyNewsService } from './features/daily-news/daily-news.service';
import { CatsModule } from './features/cats/cats.module';
import { DatabaseModule } from './database/database.module';
@Module({
  imports: [HttpModule, CatsModule, DatabaseModule],
  controllers: [DailyNewsController],
  providers: [{ provide: APP_PIPE, useClass: ValidationPipe }, DailyNewsService],
})
export class MainModule {}

