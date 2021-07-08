import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { AppDto } from 'src/dto/app-dto';

@Controller({ path: 'cities' })
export class CitiesController {
  constructor(private readonly appService: AppService) {}

  @Post('post')
  indexPsot(@Body() appDto: AppDto): string {
    console.log(appDto);
    return `{ post: 's' }`
  }
}
