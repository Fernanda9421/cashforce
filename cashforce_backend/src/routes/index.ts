import { Router } from 'express';
import buyerRouter from './buyer.router';

const router = Router();

router.use('/buyer', buyerRouter);

export default router;
