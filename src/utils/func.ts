export interface ToFunc {
  <T, K extends (...args: any[]) => any>(func: K): K;
  <T>(value: T): (...args: any[]) => T;
}

export const func = (function (f) {
  return (typeof f === 'function' ? f : () => f);
}) as ToFunc;
