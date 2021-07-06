import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { CitysController } from './controller/citys/citys.controller';
import { TagsController } from './controller/tags/tags.controller';

@Module({
  imports: [],
  controllers: [CitysController, TagsController],
  providers: [AppService],
})
export class AppModule {}
