import { getClient } from '../models/client';
import {
  saveAuthorizationCode,
  getAuthorizationCode,
  revokeAuthorizationCode,
} from '../models/authCode';
import {
  saveToken,
  getAccessToken,
  revokeToken,
  getRefreshToken,
} from '../models/token';

const oAuthModel = {
  getClient: (clientId, a) => {
    console.log(clientId, a);
    /* This is where we access client data */
    return getClient(clientId);
  },
  saveAuthorizationCode: (code, client, user) => {
    /* This is where you store the access code data into the database */
    saveAuthorizationCode({ ...code, client, user });
    return new Promise((resolve) =>
      resolve({
        redirectUri: `${code.redirectUri}`,
        authorizationCode: code.authorizationCode,
      }),
    );
  },
  getAuthorizationCode: (authorizationCode) => {
    /* this is where we fetch the stored data from the code */
    return new Promise((resolve) => {
      resolve(getAuthorizationCode(authorizationCode));
    });
  },
  revokeAuthorizationCode: (authorizationCode) => {
    /* This is where we delete codes */
    revokeAuthorizationCode(authorizationCode.authorizationCode);
    const codeWasFoundAndDeleted = true; // Return true if code found and deleted, false otherwise
    return new Promise((resolve) => resolve(codeWasFoundAndDeleted));
  },
  saveToken: (token, client, user) => {
    /* This is where you insert the token into the database */
    saveToken({ ...token, client, user });
    return new Promise((resolve) =>
      resolve({ ...token, client, user }),
    );
  },
  getAccessToken: (token) => {
    /* This is where you select the token from the database where the code matches */
    if (!token || token === 'undefined') return false;
    return new Promise((resolve) => resolve(getAccessToken(token)));
  },
  revokeToken: (token) => {
    /* Delete the token from the database */
    if (!token || token === 'undefined') return false;
    revokeToken(token.accessToken);
    const tokenWasFoundAndDeleted = true;
    return new Promise((resolve) => resolve(tokenWasFoundAndDeleted));
  },
  getRefreshToken: (token) => {
    /* This is where you create refresh tokene */
    return new Promise((resolve) => resolve(getRefreshToken(token)));
  },
};

module.exports = oAuthModel;
