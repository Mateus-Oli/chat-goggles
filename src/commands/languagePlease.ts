export const command = [
  /^language, please$/i,
  /^o que eu falo?$/i
];
export const execute = ({ socket, language }) => socket.emit({
  from: 'server',
  message: language
});
