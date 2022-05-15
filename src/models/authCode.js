const authCodeMap = new Map();

export const saveAuthorizationCode = (data) => {
  authCodeMap.set(data.authorizationCode, data);
};

export const getAuthorizationCode = (authorizationCode) => {
  return authCodeMap.get(authorizationCode) || false;
};

export const revokeAuthorizationCode = (authorizationCode) => {
  return authCodeMap.delete(authorizationCode) || false;
};
