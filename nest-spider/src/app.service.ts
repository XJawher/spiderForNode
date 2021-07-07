import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  name(): string {
    return 'name'
  }
}