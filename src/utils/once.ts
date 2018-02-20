import { func } from "./func";

interface Option {
  (validator: (args: any[]) => any): <T extends (...args: any[]) => any>(f: T) => T;
  (validator: any): <T extends (...args: any[]) => any>(f: T) => T;
}

export const option = (function (validator, original?) {
  return (function (f, acc = original) {
    return function (...args) {
      return func(validator)(args, acc) ? (acc = func(f)(...args)) : acc;
    };
  })
}) as Option;

export function times(qtd: number) {
  return option(() => qtd-- > 0);
}

export const once = times(1);
