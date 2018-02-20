type Eachable<T> = number | { [key: string]: T } | T[];

type Each<T, K = any> = (value: T, index: string, data: Eachable<T>) => K;

export const finder = <T = number>(data: Eachable<T>, finder: Each<T>) => {
  const keys = typeof data === 'number' ? data : Object.keys(data);
  const length = (keys as string[]).length || data;

  for (let index = 0; index < length; index++) if(finder(data[keys[index]] || index, keys[index] || index, data)) {
    return data[keys[index]];
  }
};

export const forEach = <T>(data: Eachable<T>, each: Each<T>) => finder(data, (x, i, d) => { each(x, i, d) });

export const reduce = <T, K>(data: Eachable<T>, reducer: (acc: K, value: T, index: string, data: Eachable<T>) => K, acc: K) => {
  forEach(data, (x, i, d) => acc = reducer(acc, x, i, d));
  return acc;
};

const getAcc = <T>(data: Eachable<T>) => data && data[Symbol.iterator] ? [] : {};

export const map = <T, K>(data: Eachable<T>, mapper: Each<T, K>) => reduce(data, (acc, x, i, d) => {
  acc[i] = mapper(x, i, d);
  return acc;
}, getAcc(data));

export const filter = <T>(data: Eachable<T>, filter: Each<T>) => reduce(data, (acc, x, i, d) => {
  if (filter(x, i, d)) { acc[i] = x; }
  return acc;
}, getAcc(data));
