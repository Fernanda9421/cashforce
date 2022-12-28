import { Router } from 'express';
import SponsorController from '../controllers/sponsor.controller';

const sponsorRouter = Router();
const controller = new SponsorController();

sponsorRouter.get(
  '/',
  (req, res, next) => controller.getAll(req, res, next),
);

export default sponsorRouter;
