import { Router } from 'express';
import OrderportionController from '../controllers/orderportion.controller';

const orderportionRouter = Router();
const controller = new OrderportionController();

orderportionRouter.get(
  '/',
  (req, res, next) => controller.getAll(req, res, next),
);

export default orderportionRouter;
