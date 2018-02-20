import { importDir } from "../utils/importDir";
import { resolve } from "path";

export const command = [
  /^help$/,
  /^ajuda$/
];
export const execute = ({ socket }) => importDir(resolve(__dirname))
  .then(modules => modules.reduce((list, { command, description }) => `${list}${String([].concat(command)[0]).replace(/[(?:\/i?)\^\$]/g, '')}\n`, '\n'))
  .then(message => socket.emit({ from: 'server', message }));
