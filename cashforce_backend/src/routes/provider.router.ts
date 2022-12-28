import { Router } from 'express';
import ProviderController from '../controllers/provider.controller';

const providerRouter = Router();
const controller = new ProviderController();

providerRouter.get(
  '/',
  (req, res, next) => controller.getAll(req, res, next),
);

export default providerRouter;
