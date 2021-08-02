import { HttpModule, Module } from '@nestjs/common';

import { APP_PIPE } from '@nestjs/core';
import { ValidationPipe } from './pipe/validation.pipe';
import { DailyNewsController } from './features/daily-news/daily-news.controller';
import { DailyNewsService } from './features/daily-news/daily-news.service';
import { CatsModule } from './features/cats/cats.module';

// MongoDB 使用方法 https://docs.nestjs.cn/8/techniques?id=mongo
import { MongooseModule } from '@nestjs/mongoose';
// 新增管道
@Module({
  imports: [HttpModule, MongooseModule.forRoot("mongodb://localhost/nest"), CatsModule],
  controllers: [DailyNewsController],
  providers: [{ provide: APP_PIPE, useClass: ValidationPipe }, DailyNewsService],
})
export class MainModule {}

