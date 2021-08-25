import { Body, Controller, Get, Post } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './interfaces/cat.interfaces';

@Controller({ path: 'cat' })
export class CatsController {

  constructor(private readonly catsService: CatsService) {}

  @Post("create")
  insertCatData(@Body() createCatDto: CreateCatDto) {
    const data = this.catsService.create(createCatDto);
    console.log(data);
    return { test: 'ss' }
  }

  @Get('get')
  getCatData(): Promise<Cat[]> {
    return this.catsService.findAll()
  }
}
