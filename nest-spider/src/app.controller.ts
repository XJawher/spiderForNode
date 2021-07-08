import { Body, Post } from '@nestjs/common';
import { Query } from '@nestjs/common';
import { Controller, Get, Param, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { AppDto } from "./dto/app-dto"
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
  indexPsot(@Body() appDto: AppDto): string {
    console.log(appDto);
    return `{ post: '222' }`
  }
}