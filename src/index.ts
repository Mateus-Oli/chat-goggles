import { socketServer } from 'socket-goggles';
import { remove, register, chat } from './services/chat';
import { createServer } from 'http';

(console as any).clear();



const server = socketServer(createServer((_, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify('Only WebSocket'));
  res.end();
}))(socket => {

  register(socket);

  socket.onEmit(data => chat(socket, data));
  socket.onClose(() => remove(socket));
});

server.listen(process.env.PORT || 8080, () => console.log('Chat'));
