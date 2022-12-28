import { Router } from 'express';
import UserController from '../controllers/user.controller';

const userRouter = Router();
const controller = new UserController();

userRouter.get(
  '/',
  (req, res, next) => controller.getAll(req, res, next),
);

userRouter.get(
  '/:id',
  (req, res, next) => controller.getById(req, res, next),
);

export default userRouter;
