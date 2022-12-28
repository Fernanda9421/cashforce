import { Router } from 'express';
import OrderController from '../controllers/order.controller';

const orderRouter = Router();
const controller = new OrderController();

orderRouter.get(
  '/',
  (req, res, next) => controller.getAll(req, res, next),
);

export default orderRouter;
