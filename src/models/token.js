const tokenMap = new Map();

export const saveToken = (token) => {
  tokenMap.set(token.accessToken, token);
};

export const getAccessToken = (token) => {
  return tokenMap.get(token);
};

export const revokeToken = (accessToken) => {
  tokenMap.delete(accessToken);
};

export const getRefreshToken = (refreshToken) => {
  console.log(refreshToken, tokenMap);
  const tokenKey = [...tokenMap.entries()]
    .filter(([key, entry]) => entry.refreshToken === refreshToken)
    .map(([k]) => k)[0];
  return tokenMap.get(tokenKey);
};
