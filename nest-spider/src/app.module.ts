import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CitiesController } from './controllers/cities/cities.controller';
import { AppService } from './app.service';

import { APP_PIPE } from '@nestjs/core';
import { ValidationPipe } from './pipe/validation.pipe';
// 新增管道
@Module({
  imports: [],
  controllers: [AppController, CitiesController],
  providers: [{ provide: APP_PIPE, useClass: ValidationPipe }, AppService],
})
export class AppModule {}
