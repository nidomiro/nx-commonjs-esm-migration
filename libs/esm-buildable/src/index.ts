import exp from 'constants';

export * from './lib/esm-buildable.module.js';


export const myESMBuildableLibFunction = () => {
    return 'myESMBuildableLibFunction';
}

export type ESMBuildableLibFunction = typeof myESMBuildableLibFunction;