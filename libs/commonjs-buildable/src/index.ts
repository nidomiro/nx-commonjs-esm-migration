import { type } from 'os';

export * from './lib/commonjs-buildable.module';


export const myCommonJSBuildableLibFunction = () => {
    return 'myCommonJSBuildableLibFunction';
}

export type CommonJSBuildableLibFunction = typeof myCommonJSBuildableLibFunction;
