const CODE = 1;

export const command = [
  /^change language to ([a-z]*)$/i,
  /^mudar idioma para ([a-z]*)$/i
];

export const execute = (user, [ language ]) => user.language = getCode(language.toLowerCase());

const getCode = language => (LANGUAGES[getPosition(language)] || [])[CODE] || 'en-US';
const getPosition = language => LANGUAGES.findIndex(([ languages ]) => languages.includes(language));

const LANGUAGES = [
  [['english', 'ingles'], 'en-US'],
  [['portuguese', 'portugues'], 'pt-BR']
];
