import { Router } from 'express';
import CnpjController from '../controllers/cnpj.controller';

const cnpjRouter = Router();
const controller = new CnpjController();

cnpjRouter.get(
  '/',
  (req, res, next) => controller.getAll(req, res, next),
);

export default cnpjRouter;
