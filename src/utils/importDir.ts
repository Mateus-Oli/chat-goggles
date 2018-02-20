import { readdir } from "fs";
import { promisify } from "util";


export const importDir = (dir: string) => promisify(readdir)(dir)
  .then(files => files.filter(file => file.match(/\.[t|j]sx?$/)))
  .then(files => files.map(file => `${dir.replace(/\/*$/, '')}/${file}`))
  .then(files => files.map(file => import(file)))
  .then(modules => Promise.all(modules));
