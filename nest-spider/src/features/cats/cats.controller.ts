import { Body, Controller, Get, Post } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './interfaces/cat.interfaces';

@Controller({ path: 'cat' })
export class CatsController {

  constructor(private readonly catsService: CatsService) {}

  @Post("create")
  async insertCatData(@Body() createCatDto: CreateCatDto) {
    const data = await this.catsService.create(createCatDto);
    console.log(createCatDto);
    return { test: data }
  }

  @Get('get')
  getCatData(): Promise<Cat[]> {
    return this.catsService.findAll()
  }
}
