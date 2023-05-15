export * from './lib/commonjs.module';


export const myCommonJSLibFunction = () => {
    return 'myCommonJSLibFunction';
}

export type CommonJSLibFunction = typeof myCommonJSLibFunction;
