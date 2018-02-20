export const command = [
  /^who am i\?$/i,
  /^quem sou eu\?$/i
];
export const execute = ({ socket, from }) => socket.emit({
  from: 'server',
  message: from.replace(/\s/g, '')
})
