export const command = [
  /^who am i\??$/,
  /what is my name\??/
];
export const execute = ({ socket, from }) => socket.emit({
  from: 'server',
  message: from
})
