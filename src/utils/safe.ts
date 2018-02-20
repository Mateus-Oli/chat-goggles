import { error } from "./error";

const PROPERROR = /Cannot read property '.*' of (undefined|null)/;
const FUNCERROR = /.* is not a function/;

const isAccessErrorMessage = ({ message }: Error) => message.match(PROPERROR) || message.match(FUNCERROR);
const isAccessError = error => error instanceof TypeError && isAccessErrorMessage(error);

export const safe = <T>(call: () => T) => {
  try { return call(); }
  catch(e) { return isAccessError(e) ? undefined : error(e); }
};
