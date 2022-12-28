import { NextFunction, Request, Response } from 'express';
import HttpException from '../exceptions/HttpException';
import UserService from '../services/user.service';

class UserController {
  private service: UserService;

  constructor() {
    this.service = new UserService();
  }

  public async getAll(_req:Request, res:Response, next:NextFunction):Promise<Response | void> {
    try {
      const users = await this.service.getAll();

      return res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  }

  public async getById(req:Request, res:Response, next:NextFunction):Promise<Response | void> {
    try {
      const { id } = req.params;

      const user = await this.service.getById(Number(id));
      if (!user) throw new HttpException(404, 'User not found!');

      return res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }
}

export default UserController;
