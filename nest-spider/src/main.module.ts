import { HttpModule, Module } from '@nestjs/common';
import { CitiesController } from './controllers/cities/cities.controller';

import { APP_PIPE } from '@nestjs/core';
import { ValidationPipe } from './pipe/validation.pipe';
import { SpiderService } from './service/spider/spider.service';
import { SpiderController } from './controllers/spider/spider.controller';
// 新增管道
@Module({
  imports: [HttpModule],
  controllers: [CitiesController, SpiderController],
  providers: [{ provide: APP_PIPE, useClass: ValidationPipe }, SpiderService],
})
export class MainModule {}
