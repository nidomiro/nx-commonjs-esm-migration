import { getModuleSystem } from "@nidomiro/node-modulesystem-check";

describe('ESM Check', () => {


  it('should execute in esm-mode', () => {

    expect(getModuleSystem()).toBe('esm');


    //expect(globalExists('typeof module.exports')).toBe('undefined');
    //expect(typeof module?.exports).toBe('undefined');


    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    //expect(import.meta.url).toBeDefined();
  });

});





