const clientMap = new Map();

clientMap.set('myClientId', {
  clientId: 'myClientId',
  clientSecret: 'secret',
  grants: ['authorization_code', 'refresh_token'],
  redirectUris: [
    'http://localhost:3006/public/app',
    'https://oauth.pstmn.io/v1/callback',
  ],
});

export const getClient = (clientId) => {
  return clientMap.get(clientId) || false;
};
