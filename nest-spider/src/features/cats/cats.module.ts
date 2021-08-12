import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsController } from './cats.controller';

@Module({
  imports: [MongooseModule.forRoot("mongodb://localhost/test")],
  controllers: [CatsController],
  providers: [],
})
export class CatsModule {}
