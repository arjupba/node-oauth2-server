import { Router } from 'express';
import users from './users';
import auth from './auth';
import publicPages from './public';

const mainRouter = new Router();
const router = new Router();

router.use('/auth', auth);
router.use('/users', users);

mainRouter.use('/api', router);
mainRouter.use('/public', publicPages);
mainRouter.use('*', (req, res) => res.redirect('/public'));

export default mainRouter;
