import { Router } from 'express';
import oAuthServer from '../../oauthServer';
import { authenticateUser } from '../../models/users';

const router = new Router();

router.post(
  '/authorize',
  (req, res, next) => {
    const { username, password } = req.body;
    const user = authenticateUser(username, password);
    if (user) {
      req.body.user = user;
      return next();
    }
    const params = [
      // Send params back down
      'client_id',
      'client_secret',
      'redirect_uri',
      'response_type',
      'grant_type',
      'state',
    ]
      .map((a) => `${a}=${req.body[a]}`)
      .join('&');
    return res.redirect(`/public/oauth?success=false&${params}`);
  },
  (req, res, next) => {
    // sends us to our redirect with an authorization code in our url
    return next();
  },
  oAuthServer.authorize({
    authenticateHandler: {
      handle: (req) => {
        return req.body.user;
      },
    },
  }),
);

router.post(
  '/token',
  (req, res, next) => {
    next();
  },
  oAuthServer.token({
    requireClientAuthentication: {
      // whether client needs to provide client_secret
      authorization_code: false,
    },
  }),
);

export default router;
