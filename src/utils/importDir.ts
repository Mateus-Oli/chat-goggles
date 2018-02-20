import { readdir } from "fs";

const readDir = (dir: string) => new Promise<string[]>((resolve, reject) =>
  readdir(dir, (error, files) => error ? Promise.reject(error) : Promise.resolve(files)));

export const importDir = (dir: string) => readDir(dir)
  .then(files => files.filter(file => file.match(/\.[t|j]sx?$/)))
  .then(files => files.map(file => `${dir.replace(/\/*$/, '')}/${file}`))
  .then(files => files.map(file => import(file)))
  .then(modules => Promise.all(modules));
