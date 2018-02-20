declare const window: NodeJS.Global;
export const self = () => typeof window !== 'undefined' ? window : global;
