import { Router } from 'express';
import user from './users';

const router = new Router();
const mainRouter = new Router();

router.use('/users', user);

mainRouter.use('/api', router);

export default mainRouter;
