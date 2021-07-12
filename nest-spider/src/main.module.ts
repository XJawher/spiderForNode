import { Module } from '@nestjs/common';
import { CitiesController } from './controllers/cities/cities.controller';

import { APP_PIPE } from '@nestjs/core';
import { ValidationPipe } from './pipe/validation.pipe';
// 新增管道
@Module({
  imports: [],
  controllers: [CitiesController],
  providers: [{ provide: APP_PIPE, useClass: ValidationPipe }],
})
export class MainModule {}
