export const isJson = json => {
  try {
    JSON.parse(json);
    return true;
  } catch(error) { return false; }
};
