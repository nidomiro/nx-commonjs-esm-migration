export * from './lib/esm-buildable.module';


export const myESMBuildableLibFunction = () => {
    return 'myESMBuildableLibFunction';
}

export type ESMBuildableLibFunction = typeof myESMBuildableLibFunction;
