import OAuthServer from 'express-oauth-server';
import model from './model';

const oauthServer = new OAuthServer({
  model,
  grants: ['authorization_code', 'refresh_token'],
  accessTokenLifetime: 60 * 60 * 24,
  allowEmptyState: true,
  allowExtendedTokenAttributes: true,
});

export default oauthServer;
