import { Module, ValidationPipe } from '@nestjs/common';

import { CatsModule } from './features/cats/cats.module';
import { DatabaseModule } from './database/database.module';
import { CoreModule } from './core/core.module';
import { DailyNewsModule } from './features/daily-news/daily-news.module';
import { APP_PIPE } from '@nestjs/core';
@Module({
  imports: [CatsModule, DatabaseModule, CoreModule, DailyNewsModule],
  controllers: [],
  providers: [{ provide: APP_PIPE, useClass: ValidationPipe }],
})
export class MainModule {}

