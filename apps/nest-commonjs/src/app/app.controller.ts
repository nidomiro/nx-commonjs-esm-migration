import { Controller, Get } from "@nestjs/common";
import { pick as commonPick } from 'lodash';
import { AppService } from "./app.service";



@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getData() {
    /**
     * This solution should work to use esm-only packages in commonjs.
     * in the dev-build it works, but if the compiled artifact is run it fails (on http-call), as it is replaced with a require call.
     */

    //const  { pick } = await import( "lodash-es" ); // a solution to use esm-only packages in commonjs
    return {
      // lodashEsPickMessage: esPick({
      //   ...this.appService.getData(),
      //   message2: 'this should be filtered out',
      // }, 'message'),
      lodashCommonJSPickMessage: commonPick({
        ...this.appService.getData(),
        message2: 'this should be filtered out',
      }, 'message'),
    }
  }
}
