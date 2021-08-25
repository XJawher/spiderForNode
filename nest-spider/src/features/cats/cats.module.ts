import { Module, ValidationPipe } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { catsProviders } from './cats.providers';
import { DatabaseModule } from '../../database/database.module';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [DatabaseModule],
  controllers: [CatsController],
  providers: [{ provide: APP_PIPE, useClass: ValidationPipe }, CatsService, ...catsProviders],
})
export class CatsModule {}
