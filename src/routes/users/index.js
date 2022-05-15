import { Router } from 'express';
import { middleware as body } from 'bodymen';
import oAuthServer from '../../oauthServer';
import { createUser, getUsers } from '../../models/users';

const router = Router();

router.get('/', oAuthServer.authenticate(), (req, res) => {
  return res.send({ ok: true, users: getUsers() });
});

router.post(
  '/',
  body({
    name: {
      type: String,
      required: true,
      minlength: 3,
    },
    userName: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },
    password: {
      type: String,
      required: true,
      minlength: 3,
    },
  }),
  ({ bodymen: { body } }, res) => {
    createUser(body);
    return res.send({ ok: true, message: 'User created' });
  },
);

export default router;
