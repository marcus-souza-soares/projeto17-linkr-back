import { Router } from 'express';

import authRouter from './authRouter.js';
import hashTagsRouter from './hashTags.js';
import postsRouter from './postsRouter.js';
import timelineRouter from './timelineRouter.js';
import userRouter from './usersRouter.js';

const router = Router();
router.use('/', authRouter);
router.use('/', timelineRouter);
router.use('/', userRouter);
router.use('/', postsRouter);
router.use('/', hashTagsRouter);

export default router;
