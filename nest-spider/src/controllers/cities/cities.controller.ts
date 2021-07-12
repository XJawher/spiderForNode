import { Body, Controller, Post } from '@nestjs/common';
import { AppDto } from 'src/dto/app-dto';

@Controller({ path: 'cities' })
export class CitiesController {

  @Post('post')
  indexPsot(@Body() appDto: AppDto): string {
    console.log(appDto);
    return `{ post: 's' }`
  }
}
