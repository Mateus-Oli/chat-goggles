export const command = [
  /^change name to ([A-Za-z0-9]*)$/i,
  /^mudar nome para ([A-Za-z0-9]*)$/i
];
export const execute = (user, [ from ]) => user.from = from;
