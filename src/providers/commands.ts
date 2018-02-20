import { importDir } from "../utils/importDir";
import { resolve } from "path";

export const executeCommands = (str: string, user: any, users: any[]) => commands
  .filter(({ command }) => [].concat(command).some(command => command.test(str)))
  .map(({ command, execute }) => execute(user, getCommandArgs(command)(str), users));

const getCommandArgs = (command: RegExp) => (str: string) => str
  .match([].concat(command).find(command => command.test(str)))
  .slice(1);

let commands: { command: RegExp, execute: (socket: any, args: string[], sockets: any[]) => any }[] = [];
importDir(resolve(__dirname, '../commands')).then(cs => commands = cs);
