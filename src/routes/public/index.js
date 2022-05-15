import { Router } from 'express';

import path from 'path';
const router = new Router();

router.get('/', (req, res) =>
  res.sendFile(
    path.join(__dirname, '../public/clientAuthenticate.html'),
  ),
);

router.get('/oauth', (req, res) =>
  res.sendFile(
    path.join(__dirname, '../public/oauthAuthenticate.html'),
  ),
);

router.get('/app', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/clientApp.html')),
);

export default router;
