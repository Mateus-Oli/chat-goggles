import 'reflect-metadata';

import { socketServer } from 'socket-goggles';
import { remove, register, chat } from './services/chat';
import { createServer } from 'http';

(console as any).clear();

const server = socketServer()(socket => {

  register(socket);

  socket.onEmit(data => chat(socket, data));
  socket.onClose(() => remove(socket));
});

server.listen(8080, () => console.log('Chat'));
