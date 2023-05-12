
export const importDynamic = new Function('modulePath', 'return import(modulePath)');

const moduleMap = new Map<string, unknown>();


// export async function esmImport<T extends string >(module: T): typeof import(T) {
    
//     if (moduleMap.has(module)) {
//         return moduleMap.get(module);
//     }
//     const mod = await eval(`import('${module}')`);
//     moduleMap.set(module, mod);
//     return mod;
// }