import { Controller, Get } from "@nestjs/common";
import { pick as commonPick } from 'lodash';
//import { pick as esPick } from 'lodash-es';
import { AppService } from "./app.service";
import { getModuleSystem } from "@nidomiro/node-modulesystem-check";



@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getData() {
    /**
     * This solution should work to use esm-only packages in commonjs.
     * in the dev-build it works, but if the compiled artifact is run it fails (on http-call), as it is replaced with a require call.
     */

    //const  { pick: esPick } = await import( "lodash-es" ); // a solution to use esm-only packages in commonjs
    return {
      moduleSystem: getModuleSystem(),
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
