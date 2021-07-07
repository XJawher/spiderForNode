import { Post } from '@nestjs/common';
import { Query } from '@nestjs/common';
import { Controller, Get, Param, Request } from '@nestjs/common';
import { AppService } from './app.service';

@Controller({ path: 'app' })
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('get1')
  get1(@Request() req): string {
    const { params, query } = req;
    console.log(params, query);
    return 'test'
  }

  @Get('get2')
  get2(@Query() query) {
    console.log(query);
    return 'test'
  }

  @Post('post')
  indexPsot(@Request() req): string {
    const { parma, query } = req;
    console.log(req);
    return `{ post: '2122' }`
  }
}