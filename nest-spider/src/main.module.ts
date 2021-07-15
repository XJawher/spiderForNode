import { HttpModule, Module } from '@nestjs/common';
import { CitiesController } from './controllers/cities/cities.controller';

import { APP_PIPE } from '@nestjs/core';
import { ValidationPipe } from './pipe/validation.pipe';
import { SpiderService } from './service/spider/spider.service';
import { SpiderController } from './controllers/spider/spider.controller';
import { DailyNewsController } from './daily-news/daily-news.controller';
import { DailyNewsService } from './daily-news/daily-news.service';
// 新增管道
@Module({
  imports: [HttpModule],
  controllers: [CitiesController, SpiderController, DailyNewsController],
  providers: [{ provide: APP_PIPE, useClass: ValidationPipe }, SpiderService, DailyNewsService],
})
export class MainModule {}
