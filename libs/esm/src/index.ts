export * from './lib/esm.module';


export const myESMLibFunction = () => {
    return 'myESMLibFunction';
}

export type ESMLibFunction = typeof myESMLibFunction;
