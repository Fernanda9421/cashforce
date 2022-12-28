import { Router } from 'express';
import buyerRouter from './buyer.router';
import cnpjRouter from './cnpj.router';
import offerRouter from './offer.router';
import orderRouter from './order.router';
import orderportionRouter from './orderportion.router';
import providerRouter from './provider.router';
import sponsorRouter from './sponsor.router';
import userRouter from './user.router';

const router = Router();

router.use('/buyer', buyerRouter);
router.use('/cnpj', cnpjRouter);
router.use('/offer', offerRouter);
router.use('/order', orderRouter);
router.use('/orderportion', orderportionRouter);
router.use('/provider', providerRouter);
router.use('/sponsor', sponsorRouter);
router.use('/user', userRouter);

export default router;
