import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service.js';
import { pick } from 'lodash-es';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return pick({
      ...this.appService.getData(),
      message2: 'this should be filtered out',
    }, 'message');
  }
}
