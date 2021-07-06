import { Controller, Get } from '@nestjs/common';

@Controller('/citys')
export class CitysController {
  @Get()
  findAll(): number {
    return 1000;
  }
}
