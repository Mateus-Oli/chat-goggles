import { importDir } from "../utils/importDir";
import { resolve } from "path";

export const command = [
  /^help$/i,
  /^ajuda$/i
];
export const execute = ({ socket }) => importDir(resolve(__dirname))
  .then(modules => modules.reduce((list, { command, description }) => `${list}${clean(command)}\n`, '\n'))
  .then(message => socket.emit({ from: 'server', message }));

const clean = command => String([].concat(command)[0])
  .replace(/\/[a-zA-Z]$/g, '')
  .replace(/[\\\/]/g, '')
  .replace(/^\^/g, '')
  .replace(/\$/g, '')
  .replace(/[\(\)]/g, '');
