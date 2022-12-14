import { Router } from 'express';

import authRouter from './authRouter.js';
import followRouter from './followRouter.js';
import hashTagsRouter from './hashTagsRouter.js';
import postsRouter from './postsRouter.js';
import repostRouter from './repostRouter.js';
import userRouter from './usersRouter.js';

const router = Router();
router.use('/', authRouter);
router.use('/', userRouter);
router.use('/', postsRouter);
router.use('/', hashTagsRouter);
router.use('/', followRouter);
router.use('/', repostRouter);

export default router;
