export * from './lib/esm.module.js';


export const myESMLibFunction = () => {
    return 'myESMLibFunction';
}

export type ESMLibFunction = typeof myESMLibFunction;
