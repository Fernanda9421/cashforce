import { Router } from 'express';
import BuyerController from '../controllers/buyer.controller';

const buyerRouter = Router();
const controller = new BuyerController();

buyerRouter.get(
  '/',
  (req, res, next) => {
    controller.getAll(req, res, next);
  },
);

export default buyerRouter;
