import { executeCommands } from "../providers/commands";

const users = [];

export const register = socket => users.push({
  socket,
  from: `X X Pussy Slayer X X ${users.length + 1}`,
  language: 'en-US'
});

export const remove = s => users.splice(users.findIndex(({ socket }) => s === socket), 1)[0];

export const chat = (socket, message) => {
  const user = getUser(socket);

  return executeCommands(message, user, users).length ?
    updateUser(user) :
    broadcast(user, message);
};

export const getUser = u => typeof u === 'string' ?
  users.find(({ from }) => u === from) :
  users.find(({ socket }) => u === socket);

const updateUser = ({ socket, ...user}) => socket.emit(Object.assign({}, user, { self: true }));

const broadcast = (user, message) => users
  .filter(u => u !== user)
  .map(({ socket }) => socket.emit(data(user, message))).length && message;

const data = ({ socket, ...info }, message) => ({ ...info, message });
