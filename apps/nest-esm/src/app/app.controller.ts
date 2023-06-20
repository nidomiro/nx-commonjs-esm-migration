import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { pick as esPick } from 'lodash-es';
import { myCommonJSLibFunction, type CommonJSLibFunction } from '@nx-commonjs-esm-migration/commonjs';
import { myCommonJSBuildableLibFunction, type CommonJSBuildableLibFunction } from '@nx-commonjs-esm-migration/commonjs-buildable';
import { myESMLibFunction, type ESMLibFunction } from '@nx-commonjs-esm-migration/esm';
import { myESMBuildableLibFunction, type ESMBuildableLibFunction } from '@nx-commonjs-esm-migration/esm-buildable';
import { camelCase } from 'camel-case';
import { getModuleSystem } from "@nidomiro/node-modulesystem-check";



@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {


    return {
      moduleSystem: getModuleSystem(),
      lodashEsPickMessage: esPick({
        ...this.appService.getData(),
        message2: 'this should be filtered out',
      }, 'message'),
      commonjsLibImportCamelCase: camelCase('my test string'),

      libs: {
        myCommonJSLibFunction: myCommonJSLibFunction(),
        myCommonJSBuildableLibFunction: myCommonJSBuildableLibFunction(),
        myESMLibFunction: myESMLibFunction(),
        myESMBuildableLibFunction: myESMBuildableLibFunction(),
      }

    };
  }
}
