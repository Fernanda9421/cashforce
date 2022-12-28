import { Router } from 'express';
import OrderController from '../controllers/order.controller';

const orderRouter = Router();
const controller = new OrderController();

orderRouter.get(
  '/:userId',
  (req, res, next) => controller.getByUserId(req, res, next),
);

orderRouter.get(
  '/',
  (req, res, next) => controller.getAll(req, res, next),
);

export default orderRouter;
