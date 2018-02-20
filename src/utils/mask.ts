type Maskable = string | string[] | number[] | Buffer;

export const mask = (mask: Maskable) =>
  (str: Maskable) =>
    String.fromCharCode(...xorArray(asCodes(mask))(asCodes(str)));

const xorArray = (mask: number[]) => (data: number[]) => data.map((c, i) => c ^ mask[i % mask.length]);

const asCodes = (str: Maskable) => [...str].map(getCode);
const getCode = (str: string | number) => typeof str === 'string' ? str.charCodeAt(0) : str;
