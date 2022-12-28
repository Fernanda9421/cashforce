import { Router } from 'express';
import OfferController from '../controllers/offer.controller';

const offerRouter = Router();
const controller = new OfferController();

offerRouter.get(
  '/',
  (req, res, next) => controller.getAll(req, res, next),
);

export default offerRouter;
