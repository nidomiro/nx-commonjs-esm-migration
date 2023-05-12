import { Controller, Get } from "@nestjs/common";

import { AppService } from "./app.service";



@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getData() {
    const  { pick } = await import( "lodash-es" ); // a solution to use esm-only packages in commonjs
    return pick(this.appService.getData(), 'message2');
  }
}
